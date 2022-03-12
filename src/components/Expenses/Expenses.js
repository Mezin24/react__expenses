import React from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

export default function Expenses({ expenses }) {
  const expensesEls = expenses.map((expense) => (
    <ExpenseItem expense={expense} key={expense.id} />
  ));

  return <Card className="expenses">{expensesEls}</Card>;
}
