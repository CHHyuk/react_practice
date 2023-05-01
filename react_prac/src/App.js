import React, { useEffect, useState, useMemo, useCallback } from "react";
import Order from "./Order";

function App() {
  const fruits =["사과","코코넛","바나나"]

  const [selectedGender, setSelectedGender] = useState("W");

  const [selecteds,setSelecteds] = useState(new Array(fruits.length).fill(true));

  const toggleFruitSelected = (index) => {
    const newSelecteds = selecteds.map((el, _index) => _index == index ? !el : el);
    setSelecteds(newSelecteds);
  };

  const selectedsFruits = selecteds.map((el,index) => el ? fruits[index] : el).filter((el) => el);

  return (
    <>
      {/* <Order /> */}
      <ul>
        {fruits.map((fruit, index) => (
          <li key = {index}>
            <label>
              <input 
                type="checkbox" 
                onChange={() => toggleFruitSelected(index)} 
                checked={selecteds[index]}
              />
              {fruit}
            </label>
          </li>
        ))}
      </ul>

      <div>
        선택 상태 : {selecteds.join(", ")}
        <hr />
        선택 과일 : {selectedsFruits.join(", ")}
      </div>

      <hr />
      <h1>라디오 버튼</h1>
      <label>
        <input 
          type="radio"
          name="gender"
          onChange={(e) => setSelectedGender("M")}
          checked={selectedGender == "M"} />
          <span>남성</span>
      </label>
      <br />
      <label>
        <input 
          type="radio"
          name="gender"
          onChange={(e) => setSelectedGender("W")}
          checked={selectedGender == "W"} />
          <span>여성</span>
      </label>
      <div>현재 값 : {selectedGender}</div>
    </>
  );
}

export default App;
