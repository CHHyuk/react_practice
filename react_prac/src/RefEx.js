import { useState, useRef } from "react"

export default function RefEx() {
  const noInputRef = useRef(null);
  const [no, setNo] = useState("");

  const [recordedNos, setRecordedNos] = useState(
    [5,10,15,20,5,20,10,5]
  );

  const saveNo = () => {
    if (no === "") {
      alert("숫자를 입력해주세요.");
      return;
    }

    setRecordedNos([...recordedNos, no]);
    setNo("");
    noInputRef.current.focus();
  };

  // const removeNo5 = () => {
  //   const newRecordedNos = recordedNos.filter((el) => el != 5);
  //   setRecordedNos(newRecordedNos);
  // };

  // const removeFirst = () => {
  //   setRecordedNos(recordedNos.filter((_,index) => index != 0));
  // };

  // const removeLast = () => {
  //   setRecordedNos(recordedNos.filter((_,index) => index != recordedNos.length - 1));
  // };

  const removeNo = (index) => {
    const newRecordedNos = recordedNos.filter((_, _index) => _index != index);
    setRecordedNos(newRecordedNos);
  };

  // const li = recordedNos.map((el, index) => <li key={index}>{el}</li>);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          saveNo();
        }}
      >
        <input
          type="number"
          ref={noInputRef}
          value={no}
          onChange={(e) => setNo(e.target.valueAsNumber)}
        />
        <button type="submit">기록</button>
      </form>

      <hr />

      <h1>기록된 숫자 v1</h1>
      <ul>
        {recordedNos.map((el, index) => (
          <li key={index}>
            <span style={{width: 50, display: "inline-block"}}>{el}</span>
            <span style={{width: 50, display: "inline-block"}}>{index}</span>
            <button onClick={() => removeNo(index)}>삭제</button>
          </li>
        ))}

      </ul>

      <hr />

      {/* <h1>기록된 숫자 v2</h1>
      <ul>{li}</ul>

      <hr />

      <h1>기록된 숫자 v2-2</h1>
      <ul>
        {recordedNos.map((el, index) => (
          <li key={index}>{el}</li>
        ))}
      </ul> */}

      {/* <button onClick={() => removeNo(0)}>인덱스 0 삭제</button>
      <button onClick={() => removeNo(1)}>인덱스 1 삭제</button>
      <button onClick={() => removeNo(2)}>인덱스 2 삭제</button>
      <button onClick={() => removeNo(3)}>인덱스 3 삭제</button> */}
    </>
  );
}
