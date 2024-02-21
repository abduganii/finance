
import React from 'react';
import {  Card} from 'antd';

const gridStyle = {
    width: '25%',
    textAlign: 'center',
};
  
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
} 
const CatgoryPage = () => {


  return (
      <Card title="Category">
          {
              options && options?.map((e,i) => (
                
                  <Card.Grid key={i} style={gridStyle}>{ e?.value}</Card.Grid>
            ))
          }
    
  </Card>
  );
};
export default CatgoryPage;