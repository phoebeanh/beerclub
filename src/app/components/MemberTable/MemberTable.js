import React, { Component } from 'react';
import './MemberTable.scss';
import Table from 'react-bootstrap/Table';
import MemberRow from './MemberRow/MemberRow';

class MemberTable extends Component {

  render() {
    const memberRows = this.props.members.map(member => 
      <MemberRow className="member-row" key={member.name}
      member={member.name} 
      totalConsumption={this.findMemberConsumptionTotal(member)} 
      setActiveMember={this.props.setActiveMember}/>);
    return(
      <div className="member-table">
        {/* Table Layout of Consumption per Member */}
        <Table responsive>
          <thead>
            <tr>
              <th>Person</th>
              <th>Consumption</th>
            </tr>
          </thead>
          <tbody>
            {memberRows}
          </tbody>
        </Table>
      </div>
    );
  }

  /**
   * 
   * Find all relevant beer consumption points for each user
   */
     findMemberConsumptionTotal = (member) => {
       if (member && this.props.data.length > 0) {
         return this.props.data.filter(h => h.member === member.name).length;
       }
      return 0;
    }
}

export default MemberTable;
