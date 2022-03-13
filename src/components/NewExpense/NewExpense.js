import React from 'react';
import NewExpenseForm from './NewExpenseForm';
import Card from '../UI/Card';
import './NewExpense.css';

export default function NewExpense(props) {
  return (
    <Card className='new-expense'>
      <NewExpenseForm addExpense={props.addExpense} />
    </Card>
  );
}
