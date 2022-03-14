import React, { useState } from 'react';
import NewExpenseForm from './NewExpenseForm';
import Card from '../UI/Card';
import Button from '../UI/Button';
import './NewExpense.css';

export default function NewExpense(props) {
  const [showForm, setShowForm] = useState(false);

  return (
    <Card className="new-expense">
      {showForm ? (
        <NewExpenseForm
          addExpense={props.addExpense}
          onCancelForm={() => setShowForm(false)}
        />
      ) : (
        <Button onClickHandler={() => setShowForm(true)}>
          Add New Expense
        </Button>
      )}
    </Card>
  );
}
