import { Input, Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addIncome, addExpense } from '../../../store/actions';
import SelectInput from '../select-input';
import { useForm } from 'react-hook-form'
import TextArea from 'antd/es/input/TextArea';
import { useSearchParams } from 'react-router-dom';
import paramsToObject from '../../../hooks/paramsToObject';
const FormAdd = ({ type, open }) => {
  const [params,setSearchParams] = useSearchParams()
  
  const dispatch = useDispatch();
  const { incomes, expenses } = useSelector((state) => ({
    incomes: state.incomes,
    expenses: state.expenses,
  }));
  const { setValue,watch,setError,clearErrors,formState: { errors }, reset} = useForm(); //to set data
  const watchedFiles = watch() // watch data

  useEffect(() => {
    const storedData = type === 'income' ? incomes : expenses;
    dispatch({ type: `SET_${type.toUpperCase()}S`, payload: storedData });
  }, [dispatch, type, incomes, expenses]);  // check type to get data
  
  const handleFormSubmit = () => {
    if (!watchedFiles.category) {
      setError("category", { type: 'custom', message: "category id reqiured" }) // alert
    }
    else if (!watchedFiles.amount) {
      setError("amount", { type: 'custom', message: "amount id reqiured" })// alert
    }
    else {
      if (type === 'income') {
        dispatch(addIncome({date: new Date, ...watchedFiles})); // get data list
        localStorage.setItem('incomes', JSON.stringify([...incomes, watchedFiles]));
        reset()
      } else if (type === 'expense') {
        dispatch(addExpense({date: new Date, ...watchedFiles}));// get data list
        localStorage.setItem('expenses', JSON.stringify([...expenses, watchedFiles]));
        reset()
      }
      reset()
      setSearchParams({ ...paramsToObject(params.entries()), opneMadal: false }) // close modal
    }
  };

  const handleCancel = () => {
    setSearchParams({ ...paramsToObject(params.entries()), opneMadal: false }) // close modal
  };

  return (
    <Modal title={`Add ${type === 'income' ? 'Income' : 'Expense'}`} afterOpenChange={()=>reset()} destroyOnClose={()=> reset()} open={params.get('opneMadal') =="true" ? true:false}  onOk={handleFormSubmit} onCancel={handleCancel}>
      <h3></h3>
        <SelectInput 
          label={"category"}
          style={{display:"inline-block", width:"100%", marginBottom:"10px"}}
          placeholder={"category"}
          value={watchedFiles.category}
          alert={errors.category?.message}
          onChange={(e) => {
          setValue("category", e)
          clearErrors("category")
        }}
      />
      
      <label  style={{display:"inline-block", width:"100%", marginBottom:"10px"}}>
        Amount:
          <Input
            style={{
            width: '100%',
            }}
            type={"number"}
            status={errors.amount?.message? "error":null}
            placeholder="amount"
          onChange={(e) => {
            setValue("amount", e.target.value)
            clearErrors("amount")
          }}
        />
        {errors.amount?.message ? <p style={{color:"red"}}> { errors.amount?.message}</p>:""}
      </label>
      <label   style={{display:"inline-block", width:"100%", marginBottom:"10px"}}>
        Notes:
          <TextArea
            showCount
            maxLength={100}
            placeholder="Notes"
            onChange={(e)=>setValue("Notes", e.target.value)}
           
          />
      </label>
    </Modal>
  );
};

export default FormAdd;
