import React from 'react';
import './App.css';
import Expenses from './components/Expenses';
import NoName from './NoName';

function App() {
  const expenses = [
    { id: 1, title: '냠냠치킨', price: 19000, date: new Date(2023, 6, 19) },
    { id: 2, title: '양파', price: 5000, date: new Date(2023, 6, 20) },
    { id: 3, title: '포도', price: 20000, date: new Date(2023, 6, 21) },
    { id: 4, title: '오렌지', price: 15000, date: new Date(2023, 6, 22) },
  ];

  return (
    <>
      <Expenses items={expenses} />
      <NoName>
        <ul>
          <li>사과</li>
          <li>복숭아</li>
          <li>포도</li>
        </ul>
      </NoName>
    </>
  );
}

export default App;
