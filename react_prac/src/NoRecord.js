import React, { useState } from "react";

export default function NoRecord() {
  const [recordedNos,setrecordedNos] = useState([]);

  const saveNo = (form) => {
    form.no.value = form.no.value.trim();

    if( form.no.value.length === 0) {
      alert('숫자를 입력해주세요');
      form.no.focus();
      return;
    }

    setrecordedNos([...recordedNos, form.no.value]);
    form.no.value = "";
    form.no.focus();
  };

  const li = recordedNos.map((el,index) => <li key={index}>{el}</li>)

  return(
    <>
      <form 
        onSubmit={(e) => {
          e.preventDefault(); 
          saveNo(e.target);
        }}
      >
        <input type="number" name="no"/>
        <button type="submit">기록</button>
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