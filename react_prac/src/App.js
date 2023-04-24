
import NoRecord from "./NoRecord";

function App() {
  const nums = [1,2,3,4,5,6,7,8];
  const arr = nums.map((el,index) => <li key={index}>내용 {el} </li>)
  return (
    <>
      <NoRecord />
      <hr />
      <ul>{arr}</ul>
    </>
  );
}

export default App;
