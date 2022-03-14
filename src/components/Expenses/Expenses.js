import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from '../Filter/ExpenseFilter';
import Card from '../UI/Card';
import './Expenses.css';

export default function Expenses({ expenses }) {
  const [currentYear, setCurrentYear] = useState(2022);

  const expensesEls = expenses
    .filter((expense) => expense.date.getFullYear() === currentYear)
    .map((expense) => <ExpenseItem expense={expense} key={expense.id} />);

  return (
    <Card className='expenses'>
      <ExpensesFilter
        selected={currentYear}
        onSetYear={(year) => setCurrentYear(year)}
      />
      {expensesEls}
    </Card>
  );
}
