import React, { useState } from "react";

export default function Order() {
  const options = [
    "사이다 1.5",
    "랜치소스",
    "머스타드 소스",
    "마라 소스",
    "스윗 칠리 소스"
  ];

  const [optionCheckeds, setOptionCheckeds] = useState([
    false,
    true,
    false,
    false,
    true
  ]);

  const toggleOptionCheck = (index) => {
    const newOptioncheckeds = optionCheckeds.map((el, _index) => _index == index ? !el : el);
    setOptionCheckeds(newOptioncheckeds)
  };

  const btnAllChecked = optionCheckeds.every((el) => el);
  
  return (
    <>
      <h1>음식 주문</h1>
      <h2>옵션</h2>
      <span style={{ paddingLeft: 40 }}>{btnAllChecked ? "[v]" : "[ ]"} 전체선택</span>
      <ul>
        {options.map((option, index) => (
          <li style={{ cursor: "pointer", userSelect: "none" }} key={option} onClick={() => toggleOptionCheck(index)}>
            {optionCheckeds[index] ? "[v]" : "[ ]"}
            {option}
          </li>
        ))}
      </ul>
    </>
  );
}
