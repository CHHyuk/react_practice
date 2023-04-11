import React from "react";
import { useState } from "react";
import styled from "styled-components";

function Calculator() {
  const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  `;

  const ButtonContainer = styled.div`
    display: grid;
    width: 40%;
    max-width: 450px;
    height: 50%;
    grid-template-columns: repeat(4, 1fr); 
    grid-column-gap: 10px;
    grid-row-gap: 10px;
  `;

  const Button = styled.button`
    background-color: #f2f3f5;
    border: none;
    color: black;
    font-size: 1.5rem;
    border-radius: 35px;
    cursor: pointer;
    box-shadow: 3px 3px 3px lightgray;

    &:active {
      margin-left: 2px;
      margin-top: 2px;
      box-shadow: none;
    }
  `;

  const CalButton = styled(Button)`
    font-size: 2rem;
    color: white;
    background-color: #4b89dc;
  `;
  
  // 해당 컴포넌트의 영역을 1~3까지 차지하게 하겠다는 것을 의미
  const ZeroButton = styled(Button)`
    grid-column: 1/3;
  `;

  const InputBar = styled.input`
    width: 40%;
    max-width: 450px;
    height: 65px;
    margin-bottom: 10px;
    border-radius: 10px;
    font-size: 30px;
    border: 2px solid #4b89dc;
    text-align: right;
    padding-right: 20px;
    
    &:focus {
      outline: none;
    };
  `;
  
  const [calc, setCalc] = useState("");

  const getNum = (e) => {
    setCalc((prev) => prev + e.target.value);
    setOperCheck(true);
  };

  const getOper = (e) => {
    if (operCheck) {
      setCalc((prev) => prev + e.target.value);
      setOperCheck(false);
      setPointCheck(true);
    }
  };

  const getPoint = (e) => {
    if (calc.length === 0) {
      return;
    }
    if (pointCheck) {
      setCalc((prev) => prev + e.target.value);
      setPointCheck(false);
    }
  };

  const delCalc = () => {
    setPointCheck(true);
    setOperCheck(true);
    let str = String(calc).slice(0, -1);
    setCalc((prev) => str);
  };

  const allClear = () => {
    setPointCheck(true);
    setCalc((prev) => "");
  };

  const getResult = () => {

    let replace_str = calc.replace(/×/gi, "*").replace(/÷/gi, "/");

    if (isNaN(eval(replace_str))) {
      setCalc("");
    } else if (eval(replace_str) == Infinity) {
      alert("0으로 나눌수 없습니다.");
      setCalc("");
      return false;
    } else {
      setCalc((prev) => eval(replace_str));
    }
  };

  const [operCheck, setOperCheck] = useState(true);
  const [pointCheck, setPointCheck] = useState(true);

  
  return (
    <MainContainer>
      <InputBar readOnly value={calc} />
      <ButtonContainer>
        <Button onClick={allClear}>AC</Button>
        <Button onClick={delCalc}>DEL</Button>
        <CalButton value="%" onClick={getOper}>%</CalButton>
        <CalButton value="÷" onClick={getOper}>÷</CalButton>
        <Button value={7} onClick={getNum}>7</Button>
        <Button value={8} onClick={getNum}>8</Button>
        <Button value={9} onClick={getNum}>9</Button>
        <CalButton value="×" onClick={getOper}>×</CalButton>
        <Button value={4} onClick={getNum}>4</Button>
        <Button value={5} onClick={getNum}>5</Button>
        <Button value={6} onClick={getNum}>6</Button>
        <CalButton value="-" onClick={getOper}>-</CalButton>
        <Button value={1} onClick={getNum}>1</Button>
        <Button value={2} onClick={getNum}>2</Button>
        <Button value={3} onClick={getNum}>3</Button>
        <CalButton value="+" onClick={getOper}>+</CalButton>
        <ZeroButton value={0} onClick={getNum}>0</ZeroButton>
        <Button value="." onClick={getPoint}>.</Button>
        <CalButton onClick={getResult}>=</CalButton>
      </ButtonContainer>
    </MainContainer>
  );
}


export default Calculator;
