import React from 'react';
import Table from 'react-bootstrap/Table';
import './App.scss';
import MemberTable from './components/MemberTable/MemberTable';
import MemberChart from './components/MemberChart/MemberChart';

function App() {
  return(
    <div className="App">
      {/* Title */}
      <h2>Data Analysis for <i>Beer Club</i></h2>
      
      {/* Beer Consumption Table And Chart */}
      <Table responsive>
        <thead>
          <tr className="sub-header">
            <th>Beer Consumption per Member</th>
            <th>Beer Consumed by CURRENT_ACTIVE_MEMBER</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <MemberTable/>
            </td>
            <td>
              <MemberChart/>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default App;