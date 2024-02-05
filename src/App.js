import Costs from './components/Costs/Costs'
import NewCost from './components/NewCost/NewCost'
import { useState } from 'react'

const INITIAL_COSTS = [{
  id: 0,
  date: new Date(2024, 1, 12),
  description: 'Notepad',
  price: 1000.99
}]

export default function App() {
  const [costs, setCosts] = useState(INITIAL_COSTS)
  const addCostHandler = (cost) => setCosts(prevCosts => [cost, ...costs])

  return <div className="App">
    <NewCost onSaveCostData={addCostHandler} />
    <Costs costs={costs} />
  </div>;
}