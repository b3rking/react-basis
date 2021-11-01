import './ExpenseItem.css';

function ExpenseItem(props) {

    // const expenseDate = new Date(2021, 2, 28);
    // const expenseTitle = 'car insurance';
    // const expensePrice = 236.21;
    return (
        <div className="expense-item">
            <div>{props.date.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
            </div>
            <div className="expense-item__price">${props.price}</div>
        </div>
    );
}

export default ExpenseItem;
