import './CostForm.css'
import { useState } from 'react'

export default function CostForm(props) {
    const [date, setDate] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')

    const changeDateHandler = (event) => setDate(event.target.value)
    const changeDescriptionHandler = (event) => setDescription(event.target.value)
    const changePriceHandler = (event) => setPrice(event.target.value)

    const submitHandler = (event) => {
        event.preventDefault()
        const costData = {
            date: new Date(date),
            description: description,
            price: price
        }
        props.onSaveCostData(costData)
        setDate('')
        setDescription('')
        setPrice('')
        props.onChancel()
    }

    return <form onSubmit={submitHandler}>
        <div className='new-cost__controls'>
            <div className='new-cost__control'>
                <label>Name</label>
                <input type='text' onChange={changeDescriptionHandler} value={description} />
            </div>
            <div className='new-cost__control'>
                <label>Price</label>
                <input type='number' min='0.01' step='0.01' onChange={changePriceHandler} value={price} />
            </div>
            <div className='new-cost__control'>
                <label>Date</label>
                <input type='date' min='1999.01.01' step='2025.01.01' onChange={changeDateHandler} value={date} />
            </div>
            <div className='new-cost__actions'>
                <button type='submit'>Add expense</button>
                <button type='button' onClick={props.onChancel}>Chancel</button>
            </div>
        </div>
    </form>
}