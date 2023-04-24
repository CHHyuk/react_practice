import { useState, useRef } from "react"
import NoRecord from "./NoRecord";

function App() {
  const formInputNoRef = useRef(null);
  const [no, setNo] = useState("");

  const notice = () => {
    formInputNoRef.current.focus();
    if (!no) {
      alert('숫자를 입력해주세요');
      formInputNoRef.current.value = '입력해주세요';
      return;
    }
    alert(`당신이 입력한 숫자는 ${no} 입니다`);
  };

  return (
    <>
      <form onSubmit={(e) => {
        e.preventDefault();
        notice();
      }}>
        <input
          ref={formInputNoRef} 
          type="text" 
          placeholder="숫자" 
          value={no} 
          onChange={(e) => setNo(e.target.value)}
        />
        <button>실행</button>
      </form>
      <NoRecord />
    </>
  );
}

export default App;
