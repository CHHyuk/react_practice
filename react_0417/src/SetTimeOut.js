import React, { useState } from "react";

export default function SetTimeOut() {
    const [num, setNum] = useState(0);

    const timeoutId = setTimeout(() => setNum(num + 1), 1000);

    const pause = () => clearTimeout(timeoutId);

    const resume = () => {
        setTimeout(() => setNum(num + 1), 1000)
    };
    return (
        <>
            숫자 : {num}
            <hr />
            <button onClick={resume}>resume</button>
            &nbsp;
            <button onClick={pause}>pause</button>
            <hr />
        </>
    )
}