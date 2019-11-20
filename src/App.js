import React from 'react';
import TableView from './components/TableView';
import ChartView from './components/ChartView';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoaded: false,
      error: null,
    };
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

  renderDataVisualizations() {
    const { error, isLoaded, data } = this.state;
    if (error) {
      return <div>Error in loading data</div>;
    } if (!isLoaded) {
      return <div>Loading ...</div>;
    }
    return (
      <>
        <TableView data={data} />
        <ChartView data={data} />
      </>
    );
  }

  render() {
    return (
      <div className="app container">
        <header>
          <h1>Bay Area Commute Patterns</h1>
          <h3>How and where do people commute in the Bay Area?</h3>
          <p> Commute patterns, more commonly referred to as county-to-county commute flows, reflect the number of individuals traveling within and between various counties for commuting purposes. DATA SOURCE: U.S. Census Transportation Planning Package 2010</p>
        </header>
        {this.renderDataVisualizations()}
      </div>
    );
  }
}

export default App;
