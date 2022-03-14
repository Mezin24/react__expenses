import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

export default function Chart(props) {
  const months = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ];

  const currentYearExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear() === props.year
  );

  currentYearExpenses.forEach((expense) => {
    const monthNumber = expense.date.getMonth();
    months[monthNumber].value += +expense.amount;
  });

  const expensesData = months.map((expense) => expense.value);
  const maxValue = Math.max(...expensesData);

  const chartbars = months.map((month, i) => {
    let heightValue = 0;

    if (maxValue > 0) {
      heightValue = Math.round((month.value / maxValue) * 100);
    }

    return <ChartBar key={i} label={month.label} height={heightValue} />;
  });

  return <div className="chart">{chartbars}</div>;
}
