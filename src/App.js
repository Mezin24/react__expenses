import React from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import expenses from './data';

export default function App() {
  return (
    <>
      <NewExpense />
      <Expenses expenses={expenses} />
    </>
  );
}
