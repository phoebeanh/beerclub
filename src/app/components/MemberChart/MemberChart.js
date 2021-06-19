import React, { Component } from 'react';
import Chart from 'react-google-charts';
import './MemberChart.scss';

class MemberChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      memberData: [
      ]
    }
  }

  componentDidMount() {
    this.renderMemberData();
  }

  renderMemberData = () => {
    //initially it is just the headers 
    this.setState({memberData: ['Beer Style', 'Amount']})
    let data = [];
    //added default column headers
    data.push(['Beer Style', 'Amount']);

    //find all relevant beer datapoint for active user and separate into
    //categories based on beer style
    this.props.beers.map((beer) => {
      let count = this.props.data.filter(h => 
        h.member === this.props.activeMember &&
        h['beer-style'] === beer.name).length;
      data.push([beer.name, count]);
      return count;
    });
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
            title: 'Beer Styles of ' + this.props.activeMember,
            colors: ['#008F8F', '#058f00', '#70008f'],
          }}
          rootProps={{ 'data-testid': '1' }}
        />
      </div>
    );
  }
}

export default MemberChart;