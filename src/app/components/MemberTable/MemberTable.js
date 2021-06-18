import React, { Component } from 'react';
import './MemberTable.scss';
import Table from 'react-bootstrap/Table';

class MemberTable extends Component {
  render() {  
    return(
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
  }
}

export default MemberTable;
