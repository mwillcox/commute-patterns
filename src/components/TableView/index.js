/* eslint-disable radix */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import { uid } from 'react-uid';
import styles from './styles.css';

function TableView(props) {
  const { data } = props;

  return (
    <div className="table-container">
      <h3>Commute mode totals broken up by work county destination: </h3>
      <Table responsive striped bordered hover size="sm" variant="dark">
        <thead>
          <tr>
            <th>County for Work</th>
            <th>Total</th>
            <th>Drove Alone</th>
            <th>Carpooled</th>
            <th>Taxi</th>
            <th>Public Transit</th>
            <th>Bicycle</th>
            <th>Motorcycle</th>
            <th>Worked at Home</th>
            <th>Other</th>
          </tr>
        </thead>
        <tbody>
          { data.map((stat) => (
            <tr key={uid(stat)}>
              <td>{stat.work_geo_short}</td>
              <td>{stat.total}</td>
              <td>{stat.drove_alone}</td>
              <td>{stat.total_carpool}</td>
              <td>{stat.taxi}</td>
              <td>{stat.total_public_transit}</td>
              <td>{stat.bicycle}</td>
              <td>{stat.motorcycle}</td>
              <td>{stat.worked_at_home}</td>
              <td>{stat.other}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

TableView.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TableView;
