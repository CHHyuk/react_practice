import React, { useState } from 'react'; 

function App() {
  
  const onBtnIncreaseClicked = () => {
    setNum(num + 1);
  };
  
  const onBtnDecreaseClicked = () => {
    setNum(num - 1);
  };

  const onBtnIncreaseClicked_10 = () => {
    setNum(num + 10);
  };

  const onBtnDecreaseClicked_10 = () => {
    setNum(num - 10);
  };
  const [num, setNum] = useState(0);

  
  return (
    <>
      NUM : {num}
      <br></br>
      <button onClick={onBtnIncreaseClicked}>+1</button>
      <br></br>
      <button onClick={onBtnDecreaseClicked}>-1</button>
      <br></br>
      <button onClick={onBtnIncreaseClicked_10}>+10</button>
      <br></br>
      <button onClick={onBtnDecreaseClicked_10}>-10</button>
    </>
  );
}

export default App;
