import React, { Component } from 'react';
import Chart from 'react-google-charts';
import './MemberChart.scss';

class MemberChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chart: null,
      chartData: []
    };
    
  }

  componentDidMount() {
    setTimeout( () => {
      this.renderChartData();    
    }, 4000);
  }

  renderChartData = async () => {
    console.log('render chart data');
    let data = [];
    //added default column headers
    const chartHeaders = ['Beer Style', 'Amount'];
    data.push(chartHeaders);

    //find all relevant beer datapoint for active user and separate into
    //categories based on beer style
    this.props.beers.map((beer) => {
      let count = this.props.data.filter(h => 
        h.member === this.props.activeMember &&
        h['beer-style'] === beer.name).length;
      data.push([beer.name, count]);
      return count;
    });

    this.setState({chartData: data});

  }

  render() {
    var chart = <Chart
      key={this.props.activeMember}
      width={'500px'}
      height={'500px'}
      chartType="PieChart"
      loader={<div>Loading Chart...</div>}
      data={this.state.chartData}
      options={{
        title: 'Beer Styles of ' + this.props.activeMember,
        colors: ['#008F8F', '#058f00', '#70008f'],
      }}
      rootProps={{ 'data-testid': '1' }}/>;

    if (this.props.activeMember === '' && !this.props.data)
      return(<div> Still loading chart...</div>);
    return( 
      <div className="member-chart" data-testid="MemberChart">
        {chart}
      </div>
    );
  }
}

export default MemberChart;