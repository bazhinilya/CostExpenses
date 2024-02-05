import './CostItem.css'
import CostDate from './CostDate'

export default function CostItem(props) {
    return <li className='cost-item'>
        <CostDate date={props.date} />
        <div className='cost-item_description'>
            <h2>{props.description}</h2>
            <div className='cost-item_price'>₽{props.price}</div>
        </div>
    </li>
}