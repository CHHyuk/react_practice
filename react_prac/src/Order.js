import React, { useState, useMemo, useCallback } from "react";

function OrderMainFood({mainFoodCount, setMainFoodCount}) {
  return (
    <>
      <h2>메인 (수량 : {mainFoodCount})</h2>
      <div>
        <button onClick={() => setMainFoodCount(mainFoodCount + 1)}>증가</button>
        <button onClick={() => setMainFoodCount(mainFoodCount == 1 ? 1 : mainFoodCount - 1)}>감소</button>
      </div>
    </>
  )
}

// 한번 랜더링 하고 변경값이 없으면 랜더링 안함
const MemoizedOrderMainFood = React.memo(OrderMainFood);

function OrderOpions({selectedCount, options, toggleAllChecked, btnAllChecked, toggleOptionCheck, optionCheckeds}) {
  return (
    <>
      <h2>옵션({selectedCount} / {options.length})</h2>

      <span onClick={toggleAllChecked} style={{ paddingLeft: 40, userSelect: "none", cursor: "pointer" }}>{btnAllChecked ? "[v]" : "[ ]"}전체선택</span>

      <ul style={{ paddingTop: 30 }}>
        {options.map((option, index) => (
          <li style={{ cursor: "pointer", userSelect: "none", paddingLeft: 40 }} key={option} onClick={() => toggleOptionCheck(index)}>
            {optionCheckeds[index] ? "[v]" : "[ ]"}
            {option}
          </li>
        ))}
      </ul>
    </>
  )
}

// 한번 랜더링 하고 변경값이 없으면 랜더링 안함
const MemoizedOrderOptions = React.memo(OrderOpions);

export default function Order() {
  const [mainFoodCount, setMainFoodCount] = useState(1);

  const options = [
    "사이다 1.5",
    "콜라 1.5",
    "레몬에이드",
    "볶음밥",
    "비빔밥",
    "치킨",
    "크림 파스타",
    "포테이토 칩",
    "치즈",
    "떡볶이"
  ];

  const [optionCheckeds, setOptionCheckeds] = useState(
    new Array(options.length).fill(false)
  );
  
  // optionCheckeds가 바뀔때만 이 함수 실행
  const toggleOptionCheck = useCallback((index) => {
    const newOptioncheckeds = optionCheckeds.map((el, _index) => _index == index ? !el : el);
    setOptionCheckeds(newOptioncheckeds);
  },[optionCheckeds]);

  const btnAllChecked = useMemo(() => optionCheckeds.every((el) => el), [optionCheckeds]);
  const selectedCount = useMemo(() => optionCheckeds.filter((el) => el).length, [optionCheckeds]);
  
  // optionCheckeds가 바뀔때만 이 함수 실행
  const toggleAllChecked = useCallback(() => {
    if (btnAllChecked) {
      const newOptioncheckeds = optionCheckeds.map((el) => false);
      setOptionCheckeds(newOptioncheckeds);
    }

    else {
      const newOptioncheckeds = optionCheckeds.map((el) => true);
      setOptionCheckeds(newOptioncheckeds);
    }
  },[optionCheckeds]);

  return (
    <>
      <h1>음식 주문</h1>
      <MemoizedOrderMainFood
        setMainFoodCount={setMainFoodCount}
        mainFoodCount={mainFoodCount}
      />
      <MemoizedOrderOptions
        selectedCount={selectedCount}
        options={options}
        toggleAllChecked={toggleAllChecked}
        btnAllChecked={btnAllChecked}
        toggleOptionCheck={toggleOptionCheck}
        optionCheckeds={optionCheckeds} />
      </>
  );
}
