import React from 'react';
import Expenses from './components/Expenses/Expenses';
import expenses from './data';

export default function App() {
  return <Expenses expenses={expenses} />;
}
