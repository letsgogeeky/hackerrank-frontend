import {Chart} from 'react-google-charts';
import {useState, useEffect} from 'react';

function Histogram() {
    let [data, setData] = useState([['Name', 'Grade in 1st Year', 'Grade in last Year'],
['Ramy', 3.7, 2.1]]);

    useEffect(()=>{
        fetch('/data').then(resp => resp.json()).then(chartData => {
            setData([...data, chartData])
        })
    }, [])
    return (
        
        <div style={{ display: 'flex', maxWidth: 900 }}>
  <Chart
    width={600}
    height={300}
    chartType="ColumnChart"
    loader={<div>Loading Chart</div>}
    data={data}
    options={{
      title: 'Population of Largest U.S. Cities',
      chartArea: { width: '30%' },
      hAxis: {
        title: 'Total Population',
        minValue: 0,
      },
      vAxis: {
        title: 'City',
      },
    }}
    legendToggle
  />
  </div>
    )
}

export default Histogram