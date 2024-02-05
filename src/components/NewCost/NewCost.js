import './NewCost.css'
import CostForm from './CostForm'
import { useState } from 'react'

export default function NewCost(props) {
    const [isFormVisible, setIsFormVisible] = useState(false)
    const inputCostDataHandler = (event) => setIsFormVisible(true)

    const saveCostDataHandler = (costData) => props.onSaveCostData({ ...costData, id: Math.random().toString() })
    const chancelCostHandler = () => setIsFormVisible(false)

    return <div className='new-cost'>
        {!isFormVisible && <button onClick={inputCostDataHandler}>Add new cost</button>}
        {isFormVisible && <CostForm onSaveCostData={saveCostDataHandler} onChancel={chancelCostHandler} />}
    </div>
}