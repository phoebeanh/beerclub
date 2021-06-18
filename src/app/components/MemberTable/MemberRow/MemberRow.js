
import React, { Component } from 'react';

class MemberRow extends Component {
  /**
   * 
   * Is triggered on a click of the row
   */
  setActive = (e) => {
    e.preventDefault();
    this.props.setActiveMember(this.props.member);
  };

  render() {
    return (
      <tr>
        <td>{this.props.member.name}</td>
        <td>{this.props.totalConsumption(this.props.member.name)}</td>
      </tr>
    );
  }
}

export default MemberRow;