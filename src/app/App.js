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
                members={this.state.members}
                data={this.state.data}
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
  
  setActiveMember = (member) => {
    this.setState({selectedMember: member})
  }

  /**
   * Returns json of member names
   */
  fetchAllMembers = () => {
    //emulate server latency
    setTimeout( () => {
      fetch(this.url + '/members')
      .then(result => result.json())
      .then(members => {
        this.setState({members: members});
        this.setActiveMember(members[0].name);
      });
    }, 1000);
  }

  /**
   * Returns list of all consumption data, including name of member,
   * date of consumption, and type of beer.
   */
  fetchAllConsumptionData = () => {
    //emulate server latency
    setTimeout( () => {
      fetch(this.url + '/consumptions')
      .then(result => result.json())
      .then(data => {
        this.setState({data: data});
      });
    }, 1000);
  }

  /**
   * Returns the names of the available beer types.
   */
  fetchAllBeers = () => {
    //emulate server latency
    setTimeout( () => {
      fetch(this.url + '/beer-styles')
      .then(result => result.json())
      .then(beers => {
        this.setState({beers: beers});
      });
    }, 1000);
  }
}



export default App;