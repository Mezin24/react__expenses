import React from 'react';
import NewExpenseForm from './NewExpenseForm';
import Card from '../UI/Card';
import './NewExpense.css';

export default function NewExpense() {
  return (
    <Card className='new-expense'>
      <NewExpenseForm />
    </Card>
  );
}
