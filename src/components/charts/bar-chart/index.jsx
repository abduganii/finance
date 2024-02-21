import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

const BarChartComponent = ({incomes,expenses}) => {
  
  const [params, setSearchParams] = useSearchParams()
  const transformedArray = incomes.map((income) => {
    return {
      name: income.category,
      amt: income.amount,
      uv: income.amount,
      pv: income.amount,
    };
  });
  const transformedArray1 = expenses.map((expense) => {
    return {
      name: expense.category,
      amt: expense.amount,
      uv: expense.amount,
      pv: expense.amount,
    };
  });
  return (
    <BarChart width={600} height={300} data={params.get("type") =="Доход"? transformedArray:transformedArray1} >
        <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
          <Tooltip />
          <Legend />
          <Bar yAxisId="left" dataKey="pv" fill="#8884d8" />
  </BarChart>
  );
};

export default BarChartComponent;
