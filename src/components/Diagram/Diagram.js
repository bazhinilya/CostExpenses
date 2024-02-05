import './Diagram.css'
import DiagramBar from './DiagramBar'

export default function Diagram(props) {
    const dataSetsValue = props.dataSets.map(dataSet=>dataSet.value)
    
    const maxMonthCosts = Math.max(...dataSetsValue)
    
    return <div className='diagram'>
        {props.dataSets.map(dataSet => (
            <DiagramBar
                key={dataSet.id}
                value={dataSet.value}
                maxValue={maxMonthCosts}
                label={dataSet.label}
            />
        ))}
    </div>
}