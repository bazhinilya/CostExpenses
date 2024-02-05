import './Costs.css'
import CostItem from './CostItem'
import CostFilter from './CostFilter'
import { useState } from 'react'
import CostList from './CostList'
import CostsDiagram from './CostsDiagram'

export default function Costs(props) {
    const [selectedYear, setSelectedYear] = useState('2022')
    const yearSaveHandler = (year) => setSelectedYear(year)
    const filteredCosts = props.costs.filter(cost => cost.date.getFullYear().toString() === selectedYear)
    return <div>
        <div className='costs'>
            <CostFilter onChangeYear={yearSaveHandler} year={selectedYear} />
            <CostsDiagram costs={filteredCosts}/>
            <CostList costs={filteredCosts} />
        </div>
    </div>
}