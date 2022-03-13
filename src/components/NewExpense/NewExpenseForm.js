import React, { useState } from 'react';
import './NewExpenseForm.css';

export default function NewExpenseForm() {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log({ title, amount, date });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            name='title'
            id='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='new-expense__control'>
          <label htmlFor='number'>Amount</label>
          <input
            type='number'
            name='number'
            id='number'
            min='0.01'
            step='0.01'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className='new-expense__control'>
          <label htmlFor='date'>Date</label>
          <input
            type='date'
            name='date'
            id='date'
            min='2018-01-01'
            max='2022-12-31'
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className='new-expense__actions'>
          <button type='submit'>Submit</button>
        </div>
      </div>
    </form>
  );
}
