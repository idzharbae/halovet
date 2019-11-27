import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { Chart, getDatums, getSecondary, getSeries } from 'react-charts'
 
function MyChart() {
    // Use any data object you want
    const originalData = React.useMemo(
      () => ({
        axis: [1, 2, 3],
        lines: [
          { data: [{ value: 10 }, { value: 17 }, { value: 36 }] },
          { data: [{ value: 32 }, { value: 35 }, { value: 21 }] },
          { data: [{ value: 1 }, { value: 29 }, { value: 14 }] }
        ]
      }),
      []
    )
   
    // Make data.lines represent the different series
    const data = React.useMemo(data => originalData.lines, [originalData])
   
    // Use data.lines[n].data to represent the different datums for each series
    const getDatums = React.useCallback(series => series.data, [])
   
    // Use the original data object and the datum index to reference the datum's primary value.
    const getPrimary = React.useCallback(
      (datum, i, series, seriesIndex, data) => originalData.axis[i],
      []
    )
   
    // Use data.lines[n].data[n].value as each datums secondary value
    const getSecondary = React.useCallback(datum => datum.value, [])
    const axes = React.useMemo(
        () => [
          { primary: true, type: 'ordinal', position: 'bottom' },
          { type: 'linear', position: 'left' }
        ],
        []
      );
    return (
      <div
        style={{
          width: '400px',
          height: '300px'
        }}
      >
        <Chart
          data={data}
          getSeries={getSeries}
          getDatums={getDatums}
          getPrimary={getPrimary}
          getSecondary={getSecondary}
          axes = {axes}
        />
      </div>
    )
  }
class Dashboard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            articles: []
        }
    }
    render(){
        const articles = [];
        return(
            <div>
                <Col sm={12} md={6} lg={3}>
                    <Card bg="white">
                        <Card.Body>
                            <Card.Title>Test</Card.Title>
                            <MyChart />
                        </Card.Body>
                    </Card>
                </Col>
            </div>        
        )
    }
}

export default Dashboard;