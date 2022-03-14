import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

export default function ExpensesList(props) {
  const expensesEls = props.expenses
    .filter((expense) => expense.date.getFullYear() === props.currentYear)
    .map((expense) => <ExpenseItem expense={expense} key={expense.id} />);

  if (expensesEls.length === 0) {
    return <h2 className='expenses-list__fallback'>No expenses found.</h2>;
  }

  return <ul className='expenses-list'>{expensesEls}</ul>;
}
