import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import './NewExpenseForm.css';

export default function NewExpenseForm(props) {
  //   const [title, setTitle] = useState('');
  //   const [amount, setAmount] = useState('');
  //   const [date, setDate] = useState('');

  const [formData, setFormData] = useState({
    title: '',
    amount: '',
    date: '',
  });

  const submitHandler = (e) => {
    e.preventDefault();
    // props.addExpense({ title, amount, date: new Date(date), id: nanoid() });
    props.addExpense({
      title: formData.title,
      amount: formData.amount,
      date: new Date(formData.date),
      id: nanoid(),
    });
    // setTitle('');
    // setAmount('');
    // setDate('');
    setFormData({
      title: '',
      amount: '',
      date: '',
    });
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
            value={formData.title}
            onChange={(e) =>
              setFormData((prevState) => ({
                ...prevState,
                [e.target.name]: e.target.value,
              }))
            }
            // onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='new-expense__control'>
          <label htmlFor='number'>Amount</label>
          <input
            type='number'
            name='amount'
            id='number'
            min='0.01'
            step='0.01'
            value={formData.amount}
            onChange={(e) =>
              setFormData((prevState) => ({
                ...prevState,
                [e.target.name]: e.target.value,
              }))
            }
            // onChange={(e) => setAmount(e.target.value)}
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
            value={formData.date}
            onChange={(e) =>
              setFormData((prevState) => ({
                ...prevState,
                [e.target.name]: e.target.value,
              }))
            }
            // onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className='new-expense__actions'>
          <button type='submit'>Submit</button>
        </div>
      </div>
    </form>
  );
}
