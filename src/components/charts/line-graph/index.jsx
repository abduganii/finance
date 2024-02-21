import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

const ChartComponent = ({incomes,expenses}) => {
  const [params, setSearchParams] = useSearchParams()
  const transformedArray = incomes.map((income) => {
    return {
      name: income.category,
      uv: income.amount,
    };
  });
  const transformedArray1 = expenses.map((expense) => {
    return {
      name: expense.category,
      uv: expense.amount,
    };
  });

  return (
    <LineChart width={600} height={300} data={params.get("type") =="Доход"? transformedArray:transformedArray1}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="name" />
    <YAxis />
  </LineChart>
  );
};

export default ChartComponent;
