import React, { Component } from 'react';
import Chart from 'react-google-charts';
import './MemberChart.scss';

class MemberChart extends Component {
  render() {  
    return(
      <div className="MemberChart" data-testid="MemberChart">
        {/* TODO: Get data from CSV per Member chosen from Member Table */}
        <Chart
          width={'500px'}
          height={'500px'}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={[
            ['Beer Style', 'Amount'],
            ['IPA', 11],
            ['Porter', 2],
            ['Stout', 2],
          ]}
          options={{
            title: 'Beer Style',
            colors: ['#008F8F', '#058f00', '#70008f'],
          }}
          rootProps={{ 'data-testid': '1' }}
        />
      </div>
    );
  }
}

export default MemberChart;