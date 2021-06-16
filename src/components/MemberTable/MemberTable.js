import React from 'react';
import PropTypes from 'prop-types';
import './MemberTable.scss';
import Table from 'react-bootstrap/Table';

const MemberTable = () => (
  <div className="MemberTable">
    {/* Table Layout of Consumption per Member */}
    <Table responsive>
                  <thead>
                    <tr>
                      <th>Person</th>
                      <th>Consumption</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* TODO: Iterate over CSV Data */}
                    <tr>
                      <td>PERSON</td>
                      <td>9999</td>
                    </tr>
                  </tbody>
                </Table>
  </div>
);

MemberTable.propTypes = {};
MemberTable.defaultProps = {};

export default MemberTable;
