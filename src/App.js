import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import expensesData from './data';

export default function App() {
  const [expenses, setExpenses] = useState(expensesData);

  const addExpense = (expense) =>
    setExpenses((prevState) => [expense, ...prevState]);

  return (
    <>
      <NewExpense addExpense={addExpense} />
      <Expenses expenses={expenses} />
    </>
  );
}
