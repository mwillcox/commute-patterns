/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import { uid } from 'react-uid';
import styles from './styles.css';

function TableView(props) {
  const { data } = props;
  return (
    <Table responsive striped bordered hover size="sm" variant="dark">
      <thead>
        <tr>
          <th>County of Residence</th>
          <th>County for Work</th>
          <th>Total</th>
          <th>Drove Alone</th>
          <th>2 Person Carpool</th>
          <th>3 Person Carpool</th>
          <th>4 Person Carpool</th>
          <th>5 or 6 Person Carpool</th>
          <th>7 or More Person Carpool</th>
          <th>Bus</th>
          <th>Streetcar or Trolley</th>
          <th>Subway</th>
          <th>Railroad</th>
          <th>Bicycle</th>
          <th>Taxi</th>
          <th>Motorcycle</th>
          <th>Other</th>
          <th>Worked at Home</th>
        </tr>
      </thead>
      <tbody>
        { data.map((stat) => (
          <tr key={uid(stat)}>
            <td>{stat.res_geo_short}</td>
            <td>{stat.work_geo_short}</td>
            <td>{stat.total}</td>
            <td>{stat.drove_alone}</td>
            <td>{stat._2_person_carpool}</td>
            <td>{stat._3_person_carpool}</td>
            <td>{stat._4_person_carpool}</td>
            <td>{stat._5_or_6_person_carpool}</td>
            <td>{stat._7_or_more_person_carpool}</td>
            <td>{stat.bus}</td>
            <td>{stat.streetcar_or_trolley}</td>
            <td>{stat.subway}</td>
            <td>{stat.railroad}</td>
            <td>{stat.bicycle}</td>
            <td>{stat.taxi}</td>
            <td>{stat.motorcycle}</td>
            <td>{stat.other}</td>
            <td>{stat.worked_at_home}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

TableView.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TableView;
