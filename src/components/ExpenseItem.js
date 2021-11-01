import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';


function ExpenseItem(props) {

    const month = props.date.toLocaleString('en-US', {month: 'long'})
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString('en-US', {day: '2-digit'})

    return (
        <div className="expense-item">
            <ExpenseDate month={month} year={year} day={day}></ExpenseDate>
            
            <div className="expense-item__description">
                <h2>{props.title}</h2>
            </div>
            <div className="expense-item__price">${props.price}</div>
        </div>
    );
}

export default ExpenseItem;
