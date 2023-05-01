import React, { useEffect, useState, useMemo } from "react";

// 소수판별함수
function isPrimeNumber(no) {
  for (let i = 2; i < no; i++) {
      if ( i * i > no) {
          break
      }

      if (no % i == 0) {
          return false;
      }
  }

  return true;
}

// max까지의 소수 리스트
function getPrimeNumbers(max) {
  const primeNumbers = [];

  for (let i = 2; i <= max; i++) {
      if (isPrimeNumber(i)) {
          primeNumbers.push(i);
      }
  }

  return primeNumbers;
}

// max까지의 소수 리스트의 갯수
function getPrimeNumbersCount(max) {
  return getPrimeNumbers(max).length;
}

function App() {
  const [inputedNo, setInputedNo] = useState(0);
  const [no, setNo] = useState(0);

  const primeNumbers = () => useMemo(
    () => getPrimeNumbersCount(inputedNo),
    [inputedNo]
  );
  
  const onSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    form.number.vaule = form.number.value.trim();

    if (form.number.value.length == 0) {
      alert('숫자를 입력해주세요.')
      form.number.focus();

      return
    }

    const number = form.number.valueAsNumber;
    form.number.focus();

    setInputedNo(number);
  };

  return (
    <>
      <button onClick={() => setNo(no + 1)}>번호 : {no}</button>
      <hr />
      <form onSubmit={onSubmit}>
        <input type="number" name="number" placeholder="숫자를 입력해주세요." defaultValue="0" className="input input-bordered"/>
        <input type="submit" value="확인" className="btn btn-outline"/>
        <hr />
        <div>소수의 개수 : {primeNumbersCount}</div> 
        <div>Max : {inputedNo}</div> 
      </form>
    </>
  );
}

export default App;
