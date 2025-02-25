import { LineChart } from '@mui/x-charts';

function Chart_m_1_1(props) {
        console.log("chart data: ", props)
      if(props.x.length <=0 || props.y1.length <=0 || props.y2.length <=0){
        return(<div align="center">
          <p>Change parameters on the left to obtain graph</p>
        </div>)
      }
      else{
        return(
        <LineChart
          xAxis={[{ data: props.x , scaleType: 'band'}]}
          yAxis={[
            { id: 'y1', scaleType: 'linear' },
            { id: 'y2', scaleType: 'linear' },
          ]}
          series={[
            { yAxisKey: 'y1', data: props.y1, label: 'atmospheric temperature' },
            { yAxisKey: 'y2', data: props.y2, label: 'surface temperature' },
          ]}
          leftAxis="y1"
          rightAxis="y2"
          height={400}
        />
        )
      }
    }    


function Chart_m_1_2(props) {
  console.log("chart data: ", props)
if(props.x.length <=0 || props.y1.length <=0 || props.y2.length <=0){
  return(<div>
    <p>Change parameters on the left to obtain graph</p>
  </div>)
}
else{
  return(
  <LineChart
    // width={500}
    height={300}

    series={[
      { data: props.y1, label: 'Number of countries experiencing temperature shifts' }
    ]}

    xAxis={[{ data: props.x , scaleType: 'band'}]}
  />
  )
}
}

function Chart_m_1_3(props) {
  console.log("chart data: ", props)
if(props.x.length <=0 || props.y1.length <=0 || props.y2.length <=0){
  return(<div>
    <p>Change parameters on the left to obtain graph</p>
  </div>)
}
else{
  return(
  <LineChart
    // width={500}
    height={300}

    series={[
      { data: props.y1, label: 'Avergae Temperature' },
      { data: props.y2, label: 'STD Temperature' },
      { data: props.y3, label: 'Min Temperature' },
      { data: props.y4, label: 'Max Temperature' }
    ]}

    xAxis={[{ data: props.x , scaleType: 'band'}]}
  />
  )
}
}


// function Chart_m_2_1(props) {
//   console.log("chart data: ", props)
// if(props.x.length <=0 || props.y1.length <=0 || props.y2.length <=0){
//   return(<div>
//     <p>Change parameters on the left to obtain graph</p>
//   </div>)
// }
// else{
//   return(
//   <LineChart
//     // width={500}
//     height={300}

//     series={[
//       { data: props.y1, label: 'Average Temperature' },
//       { data: props.y2, label: 'STD Temperature' },
//       { data: props.y3, label: 'Min Temperature' },
//       { data: props.y4, label: 'Max Temperature' }
//     ]}

//     xAxis={[{ data: props.x , scaleType: 'band'}]}
//   />
//   )
// }
// }

// Chart 2 sample data
// {
  // "data": {
  //   "x": [
  //     2001,
  //     2002,
  //     2003,
  //     2004,
  //     2005,
  //     2006,
  //     2007,
  //     2008,
  //     2009,
  //     2010,
  //     2011,
  //     2012,
  //     2013,
  //     2014,
  //     2001,
  //     2002,
  //     2003,
  //     2004,
  //     2005,
  //     2006,
  //     2007,
  //     2008,
  //     2009,
  //     2010,
  //     2011,
  //     2012,
  //     2013,
  //     2014,
  //     2001,
  //     2002,
  //     2003,
  //     2004,
  //     2005,
  //     2006,
  //     2007,
  //     2008,
  //     2009,
  //     2010,
  //     2011,
  //     2012,
  //     2013,
  //     2014
  //   ],
  //   "y1": [
  //     "China",
  //     "China",
  //     "China",
  //     "China",
  //     "China",
  //     "China",
  //     "China",
  //     "China",
  //     "China",
  //     "China",
  //     "China",
  //     "China",
  //     "China",
  //     "China",
  //     "Japan",
  //     "Japan",
  //     "Japan",
  //     "Japan",
  //     "Japan",
  //     "Japan",
  //     "Japan",
  //     "Japan",
  //     "Japan",
  //     "Japan",
  //     "Japan",
  //     "Japan",
  //     "Japan",
  //     "Japan",
  //     "United States",
  //     "United States",
  //     "United States",
  //     "United States",
  //     "United States",
  //     "United States",
  //     "United States",
  //     "United States",
  //     "United States",
  //     "United States",
  //     "United States",
  //     "United States",
  //     "United States",
  //     "United States"
  //   ],
  //   "y2": [
  //     3723.731,
  //     4112.459,
  //     4827.446,
  //     5223.755,
  //     5876.555,
  //     6488.804,
  //     6978.612,
  //     7496.832,
  //     7886.533,
  //     8616.653,
  //     9528.556,
  //     9779.282,
  //     9956.308,
  //     9998.621,
  //     1249.989,
  //     1279.362,
  //     1287.692,
  //     1283.077,
  //     1290.6,
  //     1267.624,
  //     1303.362,
  //     1232.481,
  //     1163.375,
  //     1215.058,
  //     1265.035,
  //     1306.183,
  //     1315.569,
  //     1264.413,
  //     5911.989,
  //     5952.699,
  //     6015.804,
  //     6117.963,
  //     6137.603,
  //     6057.163,
  //     6135.287,
  //     5918.869,
  //     5482.978,
  //     5681.392,
  //     5546.629,
  //     5345.454,
  //     5480.926,
  //     5528.871
  //   ]
//   },
//   "isError": false,
//   "message": "Success",
//   "statusCode": 200
// }



export const Chart = function Chart(props) {
  console.log("chart data: ", props)
if(props.x.length <=0 || props.y1.length <=0 || props.y2.length <=0){
  return(<div>
    <p>Change parameters on the left to obtain graph</p>
  </div>)
}
else{
  return(
  <LineChart
    xAxis={[{ data: props.x , scaleType: 'band'}]}
    yAxis={[
      { id: 'y1', scaleType: 'linear' },
      { id: 'y2', scaleType: 'linear' },
    ]}
    series={[
      { yAxisKey: 'y1', data: props.y1, label: 'total co2_emissions' },
      { yAxisKey: 'y2', data: props.y2, label: 'GDP in billions' },
    ]}
    leftAxis="y1"
    rightAxis="y2"
    height={400}
  />
  )
}
}
