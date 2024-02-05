import './CostDate.css'

export default function CostDate(props) {
    return <div className='cost-date'>
        <div className='cost-date__day'>{props.date.toLocaleString('en-EN', { day: '2-digit' })}</div>
        <div className='cost-date__month'>{props.date.toLocaleString('en-EN', { month: 'long' })}</div>
        <div className='cost-date__year'>{props.date.getFullYear()}</div>
    </div>
}