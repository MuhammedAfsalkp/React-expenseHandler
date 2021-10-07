import React from 'react';


import ChartBar from './ChartBar'
import './Chart.css'


const Chart=(props)=>{
    const dataPointValues=props.chartDataPoints.map(dp=>dp.value);
    // console.log(dataPointValues)
    const max=Math.max(...dataPointValues);
    // console.log(max);
    return(<div className='chart'>
        {props.chartDataPoints.map((dp)=>(
            <ChartBar key={dp.label}
            value={dp.value}
            maxValue={max}
            label={dp.label}>

            </ChartBar>
        ))}
    </div>);

}
export default Chart;