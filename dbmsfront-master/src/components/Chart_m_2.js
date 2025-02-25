import { LineChart } from '@mui/x-charts';

function Chart_m_2(props) {
    console.log("chart data: ", props)
  if(props.x.length <=0 || props.y1.length <=0){
    return(<div align="center">
      <p>Change parameters on the left to obtain graph</p>
    </div>)
  }
  else{
    return(
    <LineChart
      className="custom-line-chart"
      xAxis={[{ data: props.x , scaleType: 'band',  label: 'Years'}]}
      yAxis={[
        { id: 'y1', scaleType: 'linear', label: 'Average Wage' },
      ]}
      series={[
        { yAxisKey: 'y1', data: props.y1, label: 'AcceptanceRate' },
      ]}
      // leftAxis="y1"
      height={500}
      width={800}
    />
    )
  }
}

export default Chart_m_2;