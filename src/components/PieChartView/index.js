import React from 'react';
import PropTypes from 'prop-types';
import { PieChart, Pie, Tooltip } from 'recharts';
// eslint-disable-next-line no-unused-vars
import styles from './styles.css';

function PieChartView(props) {
  const { data } = props;

  // TODO: refactor into generic external util function
  const bikeSum = data.reduce((acc, val) => acc + val.bicycle, 0);
  const publicTransitSum = data.reduce((acc, val) => acc + val.total_public_transit, 0);
  const carSum = data.reduce((acc, val) => acc + val.car_total, 0);
  const total = bikeSum + publicTransitSum + carSum;

  const bikePercentage = Math.floor((bikeSum / total) * 100);
  const carPercentage = Math.floor((carSum / total) * 100);
  const publicTransitPercentage = Math.floor((publicTransitSum / total) * 100);
  const chartData = [
    { name: 'Bicyle', value: bikePercentage },
    { name: 'Car', value: publicTransitPercentage },
    { name: 'Public Transit', value: carPercentage },
  ];

  const renderLabel = (entry) => entry.name;
  return (
    <div className="chart-container">
      <h3>Percentage of different commute types for the selected county: </h3>
      <div className="chart">
        <PieChart width={500} height={200}>
          <Pie dataKey="value" data={chartData} cx={250} cy={100} outerRadius={80} fill="#FFA500" label={renderLabel} />
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
}

PieChartView.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PieChartView;
