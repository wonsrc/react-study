import React from 'react';
import Expenseitem from './Expenseitem';
import './Expenses.css';

const Expenses = ({ items: expenses }) => {
  return (
    <div className='expenses'>
      {expenses.map((item) => (
        <Expenseitem
          key={item.id} // 반복문을 통해 같은 컴포넌트를 표현할 때, 각각을 구분할 수 있게 해 주는 prop
          title={item.title}
          price={item.price}
          date={item.date}
        />
      ))}
    </div>
  );
};

export default Expenses;
