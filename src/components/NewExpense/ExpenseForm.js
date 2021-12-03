import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState("");

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };
    const [enteredAmount, setEnteredAmount] = useState("");

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };
    const [enteredDate, setEnteredDate] = useState("");

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseDate = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };

        props.onSaveExpenseData(expenseDate)

        setEnteredTitle("");
        setEnteredDate("");
        setEnteredAmount("");

    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="">Title</label>
                    <input
                        type="text"
                        value={enteredTitle}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Amount</label>
                    <input
                        type="number"
                        min="0.01"
                        value={enteredAmount}
                        step="0.01"
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Date</label>
                    <input
                        type="date"
                        value={enteredDate}
                        min="2019-01-01"
                        max="2025-12-31"
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
