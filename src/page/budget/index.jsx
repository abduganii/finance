import { Button, Input, Space } from 'antd'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addMount } from '../../store/actions';

export default function BudgetPage() {
  const dispatch = useDispatch();
  const [inoutValue, setInputValue] = useState()

  const anount = useSelector((state) => state.anount);
  const expenses = useSelector((state) => state.expenses);
  const incomes = useSelector((state) => state.incomes);

  const totalAmount1 = expenses.reduce((sum, expense) => sum + parseInt(expense.amount), 0);
  const totalAmount = incomes.reduce((sum, expense) => sum + parseInt(expense.amount), 0);
  const handleFormSubmit = () => { 
    if (inoutValue.length) {
      dispatch(addMount(inoutValue))
      localStorage.setItem('incomes', JSON.stringify(inoutValue));
      setInputValue('')
    }
  }
  return (
    <div  style={{margin:"30px"}}>
       <Space.Compact style={{ width: '100%' }}>
        <Input defaultValue="" placeholder='amount' onChange={(e)=>setInputValue(e.target.value)} />
        <Button type="primary" onClick={()=>handleFormSubmit()}>Submit</Button>
      </Space.Compact>

      {anount ? <>
        <h3>YOUR BUDGET WAS  { anount}$</h3>
        <h3>YOU GET  { totalAmount}$</h3>
        <h3>YOUR spend  { totalAmount1}$</h3>
        <h3>NOW YOU HAVE { anount - totalAmount1 + totalAmount}$ </h3>
      </> : <h3> Plase enter your budget</h3>}
    </div>
  )
}
