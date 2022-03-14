import React, { useState } from 'react';

import ExpensesFilter from '../Filter/ExpenseFilter';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import './Expenses.css';

export default function Expenses({ expenses }) {
  const [currentYear, setCurrentYear] = useState(2022);

  // const expensesEls = expenses
  //   .filter((expense) => expense.date.getFullYear() === currentYear)
  //   .map((expense) => <ExpenseItem expense={expense} key={expense.id} />);

  return (
    <Card className='expenses'>
      <ExpensesFilter
        selected={currentYear}
        onSetYear={(year) => setCurrentYear(year)}
      />
      <ExpensesList expenses={expenses} currentYear={currentYear} />
    </Card>
  );
}
