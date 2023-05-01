import React, { useEffect, useState, useMemo } from "react";

// 소수판별함수
function isPrimeNumber(no) {
  for (let i = 2; i < no; i++) {
    if (i * i > no) {
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

function PrimeNosCount({ max }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const count = getPrimeNumbersCount(max);
    setCount(count)
  },[max])

  return (<div style={{ border: '10px solid black', padding: 50 }}>
    {max}사이에 존재하는 소수의 갯수는 {count}개 이다.
  </div>
  );
}

let AppCallCount = 0;

function App() {
  AppCallCount++;
  console.log(`AppCallCount : ${AppCallCount}`);

  const [no, setNo] = useState(0);

  return (
    <>
      <PrimeNosCount max={100} />
      <hr />
      <PrimeNosCount max={200} />
      <hr />
      <PrimeNosCount max={300} />
      <hr />
      <PrimeNosCount max={5000000} />
      <hr />
      <button onClick={() => setNo(no + 1)}>버튼 : {no}</button>
    </>
  );
}

export default App;
