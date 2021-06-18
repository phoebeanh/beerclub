import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import './App.scss';
import MemberChart from './components/MemberChart/MemberChart';
import MemberTable from './components/MemberTable/MemberTable';

class App extends Component {
  //hardcoded the local server's URL for demo's sake
  url = 'http://localhost:8000';
  
  constructor() {
    super();
    this.state = {
      data: [],
      members: [],
      beers: [],
      selectedMember: ''
    };
  }
  
  componentDidMount() {
    this.fetchAllMembers();
    this.fetchAllConsumptionData();
    this.fetchAllBeers();
  }

  /**
   * Returns list of member names & sets the first member in the list
   * as the default member upon entry
   */
  fetchAllMembers = () => {
    //emulate server latency
    setTimeout(3000);
    fetch(this.url + '/members')
    .then(result => result.json())
    .then(raw => {
      this.setState({members: raw});
      this.setActiveMember(raw[0].name);
    });
  }

  /**
   * Returns list of all consumption data, including name of member,
   * date of consumption, and type of beer.
   */
  fetchAllConsumptionData = () => {
    //emulate server latency
    setTimeout(3000);
    fetch(this.url + '/consumptions')
    .then(result => result.json())
    .then(raw => {
      this.setState({data: raw});
    });
  }

  /**
   * Returns the names of the available beer types.
   */
  fetchAllBeers = () => {
    //emulate server latency
    setTimeout(3000);
    fetch(this.url + '/beer-styles')
    .then(result => result.json())
    .then(raw => {
      this.setState({beers: raw});
    });
  }

  /**
   * 
   * Find all relevant beer consumption points for each user
   */
  findMemberConsumptionTotal = (member) => {
    return this.state.data.map(h => h.name === member).length;
  }

  setActiveMember = (member) => {
    this.setState({selectedMember: member})
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
              <th>Beer Consumed by 
                <span className="member"> {this.state.selectedMember}</span>
                </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><MemberTable 
              activeMember = {this.state.selectedMember}
              members={this.state.members}
              memberConsumptionTotal={this.findMemberConsumptionTotal}
              setActiveMember={this.setActiveMember}/>
              </td>
              <td><MemberChart 
                activeMember = {this.state.selectedMember}
                data={this.state.data} 
                beers={this.state.beers}/>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default App;