import React from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

export default function Expenses({ expenses }) {
  const expensesEls = expenses.map((expense) => (
    <ExpenseItem expense={expense} key={expense.id} />
  ));

  return <div className="expenses">{expensesEls}</div>;
}
