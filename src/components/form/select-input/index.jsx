

import React from 'react';
import { Select, Space } from 'antd';
const categories = [
    'Salary',
    'Freelance Income',
    'Investment Return',
    'Rent',
    'Utilities',
    'Groceries',
    'Dining Out',
    'Entertainment',
    'Shopping',
    'Transportation',
    'Healthcare',
    'Insurance',
    'Education',
    'Gifts',
    'Savings',
    'Debt Repayment',
    'Miscellaneous',
    'Hobbies',
    'Travel',
    'Subscription',
  ]; 
const options = [];
for (let i = 1; i < categories.length; i++) {
  options.push({
    value: categories[i],
    label: categories[i],
  });
}  // categories push inside option arr

const SelectInput = ({label,onChange,placeholder,alert, ...other}) => (
    <label {...other}>
    <p>{label}</p>
   
        <Select
            style={{
            width: '100%',
      }}
      status={alert? "error":null}
            onChange={onChange}
            placeholder={placeholder}
            options={options}
            
    />
      {alert? <p style={{color:"red"}}> { alert}</p>:""}
  </label>
);
export default SelectInput;