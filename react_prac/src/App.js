import React, { useEffect, useState, useRef } from "react";

let AppCallCount = 0;

function App() {
  AppCallCount++;
  console.log(`AppCallCount : ${AppCallCount}`)

  const [no, setNo] = useState(0);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const html = document.getElementsByTagName('html')[0];

    if (isDark) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  },[isDark]);

  return (
    <>
      <div>
        <button className="btn btn-outline" onClick={() => setNo(no + 1)}>App 버튼 : {no}</button>
        <hr />
        <button className="btn btn-outline" onClick={() => setIsDark(!isDark)}>테마토글</button>
        <hr />
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, laborum soluta nesciunt, minus expedita explicabo enim et reprehenderit accusantium aut repellat, delectus assumenda accusamus non atque fugiat molestiae voluptatem hic!
        </div>

        <h1 className="color-primary">안녕, 반가워</h1>
      </div>

    </>
  );
}

export default App;
