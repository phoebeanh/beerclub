import React, { Component } from 'react';
import './MemberTable.scss';
import Table from 'react-bootstrap/Table';
import MemberRow from './MemberRow/MemberRow';

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
            <MemberRow 
              member={this.props.members} 
              totalConsumption={this.props.memberConsumptionTotal} 
              setActiveMember={this.props.setActiveMember} />
          </tbody>
        </Table>
      </div>
    );
  }
}

export default MemberTable;
