import React from 'react'
import BarChart from './barchart'
import ChartHolder from './chart-holder'
const Dashboard4 = () => {
  return (
    <div className='dashboard'>
      <div className='utility-wrapper'>
        <span className='sold-items'><b>Top 10 sold items</b></span>
        <span className='sales-period'>Period:</span>
        <select className='select-period'>
            <option name="7-days" value="7-days">Past 7 days</option>
            <option name="30-days" value="30-days">Past 30 days</option>
            <option name="1-year" value="1-year">Past 1 year</option>
        </select>
        <ChartHolder>
          <BarChart><aside><p>Meat</p></aside></BarChart>
        </ChartHolder>
      </div>
    </div>
  )
}

export default Dashboard4
