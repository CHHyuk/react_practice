import NoRecord from "./NoRecord";

function App() {
  const onSubmit = (e) => {
    e.preventDefault();
    // trim = 양쪽 공백 다 지워줌 [        장한혁          ]
    e.target.name.value = e.target.name.value.trim();

    if ( e.target.name.value.length == 0 ) {
      alert("이름을 입력해주세요")
      e.target.name.focus();
      return;
    }
    e.target.age.value = e.target.age.value.trim();

    if ( e.target.age.value.length == 0 ) {
      alert("나이를 입력해주세요")
      e.target.age.focus();
      return;
    }

    const name = e.target.name.value;
    const age = e.target.age.valueAsNumber;

    alert(`이름 : ${name}, 나이 : ${age}`);

    e.target.name.value = '';
    e.target.age.value = '';

    e.target.focus();
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" name="name" placeholder="이름을 입력해주세요" />
        <br />
        <input type="number" name="age" placeholder="나이를 입력해주세요" />  
        <br />
        <input type="submit" value="전송"/>
        {/* <button type="submit" value="전송"></button> 윗줄이랑 같은거*/}
      </form>
    </>
  );
}

export default App;
