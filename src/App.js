/* eslint-disable radix */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
import React from 'react';
import TableView from './components/TableView';
import PieChartView from './components/PieChartView';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoaded: false,
      error: null,
      selectedCounty: 'Alameda',
    };
    this.handleCountyChange = this.handleCountyChange.bind(this);
  }

  componentDidMount() {
    fetch('https://data.bayareametro.gov/resource/a3ij-q9vc.json')
      .then((response) => response.json())
      .then(
        // Handle the result
        (result) => {
          this.setState({
            isLoaded: true,
            data: result,
          });
        },
        // Handle error
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        },
      );
  }

  // TODO: Move into external utilty function
  massageData(data) {
    // Grab the unique list of counties from the dataset
    this.listOfCounties = [...new Set(data.map((x) => x.res_geo_short))].sort();

    // Group data by residential county
    const groupedData = this.groupBy(data, (item) => item.res_geo_short);

    // Convert necessary string to ints and add aggregate fields
    groupedData.forEach((county) => this.convertStrings(county));
    return groupedData;
  }

  // TODO: Move into external utilty function
  groupBy(list, keyGetter) {
    const map = new Map();
    list.forEach((item) => {
      const key = keyGetter(item);
      const collection = map.get(key);
      if (!collection) {
        map.set(key, [item]);
      } else {
        collection.push(item);
      }
    });
    return map;
  }

  // TODO: Move into external utilty function
  // Converts necessary JSON string values to integers
  convertStrings(array) {
    array.forEach((entry) => {
      entry.total = parseInt(entry.total);
      entry.drove_alone = parseInt(entry.drove_alone);
      entry.taxi = parseInt(entry.taxi);
      entry.total_carpool = parseInt(entry._2_person_carpool)
        + parseInt(entry._3_person_carpool) + parseInt(entry._4_person_carpool)
        + parseInt(entry._5_or_6_person_carpool)
        + parseInt(entry._7_or_more_person_carpool);
      entry.car_total = entry.drove_alone + entry.taxi + entry.total_carpool;
      entry.total_public_transit = parseInt(entry.bus) + parseInt(entry.streetcar_or_trolley)
        + parseInt(entry.subway) + parseInt(entry.railroad);
      entry.bicycle = parseInt(entry.bicycle);
      entry.motorcycle = parseInt(entry.motorcycle);
      entry.worked_at_home = parseInt(entry.worked_at_home);
    });
  }

  handleCountyChange(event) {
    this.setState({ selectedCounty: event.target.value });
  }

  renderDataVisualizations() {
    const {
      error,
      isLoaded,
      data,
      selectedCounty,
    } = this.state;
    if (error) {
      return <div>Error in loading data</div>;
    } if (!isLoaded) {
      return <div>Loading ...</div>;
    }
    const massagedData = this.massageData(data).get(selectedCounty);
    return (
      <div className="data-container">
        <div className="county-select">
          <p>Commute patterns, more commonly referred to as county-to-county commute flows, reflect the number of individuals traveling within and between various counties for commuting purposes. This data comes from 2010 U.S. Census Transportation Planning Package and can be found <a href="https://data.bayareametro.gov/dataset/Vital-Signs-Commute-Patterns-Bay-Area/a3ij-q9vc/data">here</a>.</p>
          <label className="select-label" htmlFor="countySelector">Select which county of residence you want to view data for: </label>
          <select id="countySelector" onChange={this.handleCountyChange} value={selectedCounty}>
            { this.listOfCounties.map((county) => (
              <option key={county} value={county}>{county}</option>)) }
          </select>
        </div>
        <TableView data={massagedData} />
        <PieChartView data={massagedData} />
      </div>
    );
  }

  render() {
    return (
      <div className="app container">
        <div className="header-container">
          <div className="header-content">
            <h1>Bay Area Commute Patterns</h1>
            <h2>Detailing how and where people commute in the Bay Area</h2>
          </div>
        </div>
        {this.renderDataVisualizations()}
      </div>
    );
  }
}

export default App;
