import React from "react";
import { useState } from "react";

// HOOK

// const countHandle = () => {
//     // count++
//     setCount(count + 1) // state 값을 변경해주는 함수, 실행: 재 렌더링
//     console.log(count)
// }

function Counter(props) {
    // const [변수명, set함수명] = useState(초기값)
    const [count, setCount] = useState(0)
    
    return (
        <div>
            <p>총 {count}번 클릭</p>
            <button onClick={() => setCount(count+1)}>
                Click
            </button>
        </div>
    )
}

export default Counter

