import React, { Component } from 'react';
import './MemberChart.scss';
import Chart from 'react-google-charts';

class LoadWrapper extends Component {
  render() {
    if (this.props.loading) {
      return <>Loading...</>;
    } else if (this.props.error) {
      return <>Error....</>;
    } else {
      return <>{this.props.children}</>;
    }
  }
}

class MemberChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false
      });
    }, 3000);
  }

  getChart = () => {
    return (
        <Chart
        key={this.props.activeMember}
        width={'500px'}
        height={'500px'}
        chartType="PieChart"
        loader={<div>Loading Chart...</div>}
        data={this.renderChartData()}
        options={{
          title: 'Beer Styles of ' + this.props.activeMember,
          colors: ['#008F8F', '#058f00', '#70008f'],
        }}
        rootProps={{ 'data-testid': '1' }}
        chartWrapperParams={{ view: { columns: [0, 1] } }}
        chartPackages={['corechart', 'controls']}
        />
    );
  }

  renderChartData = () => {
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

    return data;
  }

  render() {
      return( 
        <div className="member-chart" data-testid="MemberChart">
          <LoadWrapper loading={this.state.loading} error={this.state.error}>
            {this.getChart()}
          </LoadWrapper>
        </div>
      );
  }
}
  export default MemberChart;