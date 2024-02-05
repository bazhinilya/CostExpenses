import './CostFilter.css'

export default function CostFilter(props) {
    const yearChangeHandler = (event) => props.onChangeYear(event.target.value)

    return <div className='costs-filter'>
        <div className='costs-filter__control'>
            <label>Filter by year</label>
            <select onChange={yearChangeHandler} value={props.year}>
                <option value='2024'>2024</option>
                <option value='2023'>2023</option>
                <option value='2022'>2022</option>
            </select>
        </div>
    </div>
}