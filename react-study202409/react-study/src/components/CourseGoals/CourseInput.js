import React, { useState } from 'react';
import './CourseInput.css';
import ButtonComponent from '../UI/Button';

const CourseInput = ({ onAdd }) => {
  const [enteredText, setEnteredText] = useState('');

  // 입력값 검증용 상태 변수
  const [isValid, setIsValid] = useState(true);

  const textChangeHnadler = (e) => {
    if (e.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredText(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault(); // form 기능 중지
    if (enteredText.trim().length === 0) {
      setIsValid(false);
      return;
    }
    onAdd(enteredText); // App.js에게 입력값 넘기기
    setEnteredText(''); // 입력창 비우기
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
        <label>나의 목표</label>
        <input type='text' value={enteredText} onChange={textChangeHnadler} />
      </div>
      <ButtonComponent type='submit'>목표 추가하기</ButtonComponent>
    </form>
  );
};

export default CourseInput;
