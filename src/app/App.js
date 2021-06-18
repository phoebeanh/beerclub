import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import './App.scss';
import MemberChart from './components/MemberChart/MemberChart';
import MemberTable from './components/MemberTable/MemberTable';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      data: [],
      activeMember: ''
    };
  }
  
  componentDidMount() {
    this.fetchAllData();
  }

  fetchAllData = async () => {
    //hardcoded the local server's URL for demo's sake
    fetch('http://localhost:8000/members')
    .then(result => result.json())
    .then(raw => {
      this.setState({data: raw});
    });
  }

  fetchActiveMember = async () => {
    
  }

  render() {
    return (
      <div className="App">
        {/* Title */}
        <h2>Data Analysis for <i>Beer Club</i></h2>
        
        {/* Beer Consumption Table And Chart */}
        <Table responsive>
          <thead>
            <tr className="sub-header">
              <th>Beer Consumption per Member</th>
              <th>Beer Consumed by {this.state.activeMember}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><MemberTable/></td>
              <td><MemberChart/></td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default App;