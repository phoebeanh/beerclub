
import React, { Component } from 'react';

class MemberRow extends Component {
  /**
   * 
   * Is triggered on a click of the row
   */
  setActive = (e) => {
    e.preventDefault();
    console.log('boop!');
    this.props.setActiveMember(this.props.member);
  };

  render() {
    return (
      <tr id="member-row" onClick={this.setActive}>
        <td className="member">{this.props.member}</td>
        <td className="member">{this.props.totalConsumption}</td>
      </tr>
    );
  }
}

export default MemberRow;