import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PieChart, Pie, Cell } from 'recharts';
import cls from "./pie.module.scss"


const data = [
  { name: 'Group A', value: 50 },
  { name: 'Group B', value: 10 },
  { name: 'Group C', value: 10 },
  { name: 'Group D', value: 10 },
  { name: 'Group D', value: 10 },
  { name: 'Group D', value: 10 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function PieChartComponent({incomes, expenses}) {
  const [params, setSearchParams] = useSearchParams()
  const [date, setDate] = useState([])
  const ProtsetFunc = (date) => {
    const totalAmount = date.reduce((sum, expense) => sum + parseInt(expense.amount), 0);

    const expensesWithPercentage = date.map(expense => ({
      ...expense,
      percentage: (expense.amount / totalAmount) * 100
    }));
    setDate(expensesWithPercentage)
  }
  useEffect(() => {
    ProtsetFunc(expenses)
 },[])
  
  useEffect(() => {
    ProtsetFunc(params.get("type") == "Доход"? incomes : expenses)
  },[params.get("type")])

  const transformedArray = date.map((income) => {
    return {
      name: income.category,
      value: income.percentage,
    
    };
  });
  return (
    <div  className={cls.PieChartComponent}>
       <PieChart width={400} height={400}>
      <Pie
        data={transformedArray}
        cx="50%"
        cy="50%"
        labelLine={false}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {transformedArray && transformedArray.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      </PieChart>
      <div>
        {transformedArray &&  transformedArray.map((entry, index) => (
          <div className={cls.PieChartComponent__value} key={index}>
            <div style={{"background":`${COLORS[index % COLORS.length]}`}}></div>
            <p>{entry?.name}</p>
            <p>{entry?.value}%</p>
          </div>
        ))}
      </div>
   </div>
  );
}
