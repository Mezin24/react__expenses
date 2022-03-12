import React from 'react';
import Card from '../UI/Card';
import './ExpenseDate.css';

export default function ExpenseDate(props) {
  const month = props.date.toLocaleDateString('en-US', {
    month: 'long',
  });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleDateString('en-US', {
    day: '2-digit',
  });

  return (
    <Card className="expense-date">
      <div className="expense-date__month"> {month} </div>{' '}
      <div className="expense-date__day"> {day} </div>{' '}
      <div className="expense-date__year"> {year} </div>{' '}
    </Card>
  );
}
