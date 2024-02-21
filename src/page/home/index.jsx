import React, { useEffect, useState } from 'react';
import FinaceList from '../../components/list/finace-list'
import FinaceCard from '../../components/card/finace-card';
import FormAdd from '../../components/form/add-form';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function HomePage() {
  const [params, setSearchParams] = useSearchParams()
  const incomes = useSelector((state) => state.incomes);
  const expenses = useSelector((state) => state.expenses);
  const [list, setList] = useState(incomes)

  useEffect(() => {
    if (params.get("type") == "Доход") {
      setList(incomes)
    } else {
      setList(expenses)
    }
  }, [params.get("type"), params.get("opneMadal")])
  
  const calculateTotal = (items,groupBy) => {

    const date = new Date(items.date);
    const key = getKeyFromDate(date, groupBy);
    const today = getKeyFromDate(date, new Date);
    return items.reduce((total, item) => Number(total) + Number(item.amount), 0);
  };


  const getKeyFromDate = (date, groupBy) => {
    if (groupBy === 'day') {
      return date.getDay(); // Key is the date in the format 'YYYY-MM-DD'
    } else if (groupBy === 'month') {
      return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
    } else if (groupBy === 'year') {
      return `${date.getFullYear()}`;
    }

    return 'all';
  };
  const totalIncome = calculateTotal(incomes,params.get('date'));
  const totalExpense = calculateTotal(expenses,params.get('date'));
  return (
    <>
      <FinaceCard totalIncome={totalIncome} totalExpense={totalExpense} />

      <h4> {}</h4>
      <FinaceList list={list} />
      <FormAdd type={params.get('type') == "Доход" ? "income" :"expense"}  />
    </>
  )
}
