import React from 'react';
import Expenses from './components/Expenses';

export default function App() {
  const expenses = [
    {
      id: 1,
      title: 'Car insurance',
      date: new Date(2021, 2, 28),
      price: '$294.67',
    },
    { id: 2, title: 'Iphone', date: new Date(2021, 5, 18), price: '$94' },
    { id: 3, title: 'TV', date: new Date(2022, 11, 2), price: '$214' },
    {
      id: 4,
      title: 'Book insurance',
      date: new Date(2020, 2, 5),
      price: '$14',
    },
  ];

  return <Expenses expenses={expenses} />;
}
