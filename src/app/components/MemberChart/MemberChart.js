import React, { Component } from 'react';
import Chart from 'react-google-charts';
import './MemberChart.scss';

class MemberChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      memberData: [['Beer Style', 'Amount']]
    }
  }

  componentDidMount() {
    this.renderMemberData();
  }

  renderMemberData = async() => {
    setTimeout(3000);
    let data = [];
    //added default column headers
    data.push(['Beer Style', 'Amount']);

    //find all relevant beer datapoint for active user and separate into
    //categories based on beer style
    for (var beer in this.props.beers) {
      let count = 0;
      for (var n in this.props.data) {
          if (n.member === this.props.selectedMember && n["beer-style"] === beer) {
            count++;
          }
      }
      data.push([beer, count]);
    }
    this.setState({memberData: data});
  }

  render() {  
    return(
      <div className="MemberChart" data-testid="MemberChart">
        <Chart
          width={'500px'}
          height={'500px'}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={this.state.memberData}
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