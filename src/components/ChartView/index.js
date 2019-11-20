import React from 'react';
import PropTypes from 'prop-types';
import {
  BarChart, Bar,
} from 'recharts';

class ChartView extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      data: props.data,
      selectedCounty: 'Alameda',
    };
  }

  handleChange(event) {
    this.setState({ selectedCounty: event.target.value });
  }

  render() {
    const { data, selectedCounty } = this.state;
    const listOfCounties = [...new Set(data.map((x) => x.res_geo_short))].sort();
    return (
      <div>
        <p>This chart allows you to drill down into the data using bar chart visualizations</p>
        <select id="county" onChange={this.handleChange} value={selectedCounty}>
          { listOfCounties.map((county) => (<option key={county} value={county}>{county}</option>)) }
        </select>
        <BarChart
          width={400}
          height={200}
          data={data.filter((item) => item.res_geo_short === selectedCounty)}
        >
          <Bar dataKey="bicycle" fill="#82ca9d" />
        </BarChart>
      </div>
    );
  }
}

ChartView.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ChartView;
