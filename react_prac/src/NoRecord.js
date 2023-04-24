import React, { useState } from "react";

export default function NoRecord() {
  const [no,setNo] = useState('');
  const [recordedNos,setrecordedNos] = useState([]);

  const saveNo = (e) => {
    e.preventDefault();

    if( no === '') {
      alert('숫자를 입력해주세요');
      return;
    }

    setrecordedNos([...recordedNos,no]);
    setNo('');
  };

  const li = recordedNos.map((el,index) => <li key={index}>{el}</li>)

  return(
    <>
      <form>
        <input type="number" value={no} onChange={(e) => setNo(e.target.valueAsNumber)}/>
        <button type="submit" onClick={saveNo}>
        기록
        </button>
      </form>
      
      <hr />
      <h1>기록된 숫자 v1</h1>
      기록된 숫자 : [{recordedNos.join(",")}]
      
      <hr />
      <h1>기록된 숫자 v2-1</h1>
      <ul>{li}</ul>

      <hr />
      <h1>기록된 숫자 v2-2</h1>
      <ul>
        {recordedNos.map((el,index) => (
          <li key={index}>{el}</li>
        ))}
      </ul>
    </>
  );
}