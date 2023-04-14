import React, {useState} from 'react'; 

let AppCallCount = 0;

function App() {
  AppCallCount++;
  console.log(`app이 ${AppCallCount}번 실행됨!`);

  const [name, setName] = useState(`Paul`);
  const [age,setAge] = useState(10);
  const [address, setAddress] = useState(`대전시 서구`);

  return (
    <>
      <input 
        type="text" 
        placeholder="이름을 입력해주세요." 
        Value={name} 
        onChange={(e) => {
          console.log(`e.target.value : ${e.target.value}`);
          setName(e.target.value);
        }}
      />
      &nbsp; / &nbsp; 이름 : {name}
      <hr />
      <input 
        type="number" 
        placeholder="나이를 입력해주세요." 
        Value={age} 
        onChange={(e) => {
          console.log(`e.target.value : ${e.target.value}`);
          setAge(e.target.value);
        }}
      />
      &nbsp; / &nbsp; 나이 : {age}
      <hr />
      <input 
        type="text" 
        placeholder="주소를 입력해주세요." 
        Value={address} 
        onChange={(e) => {
          console.log(`e.target.value : ${e.target.value}`);
          setAddress(e.target.value);
        }}
      />
      &nbsp; / &nbsp; 주소 : {address}
      <hr />
    </>
  );
}

export default App;
