import react from "react";
import ChartBar from './ChartBar';
import './Chart.css';
import './ChartBar.css'


const  Chart = (props) => {
 const dataPointValue = props.dataPoints.map(dataPoint =>
    dataPoint.value
    );
    const totalMaximum = Math.max(...dataPointValue);

return(
<div className="chart">
{props.dataPoints.map(dataPoint => <ChartBar 


key={dataPoint.id} //   بسهل الترتيب لرياكت مهم دايما وبنستخدم فيه اشي نادر من الاراي 
value={dataPoint.value}
maxValue= {totalMaximum}
label ={dataPoint.label}



/>)}


</div>
)
};

export default Chart;
