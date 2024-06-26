import React, { useState } from "react";

// 방문객수(text), 조식여부(checkbox), 요청사항(textarea)

function Reservation(props) {
    
    // 각 input
    const [guestOfNum, setGuestOfNum] = useState(1)
    
    const [haveBreakfast, setHaveBreakfast] = useState(false) // checkbox는 논리값이므로
    
    const [msg, setMsg] = useState('요청사항을 입력하세요.')


    // onsubmit으로 내용 제출
    const handleSubmit = (event) => {
        event.preventDefault()
        alert(`방문객 수: \n ${guestOfNum}명 \n 조식여부: \n ${haveBreakfast} \n 요청사항: \n ${msg}`)
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>방문객수<h3>test</h3></label>
            <input type="text" value={guestOfNum} 
                onChange={(event) => {
                    setGuestOfNum(event.target.value) // 숫자로 제한되게 설정할 필요가 있음
                }} />
            <br/>
            
            <label>조식 여부</label>
            <input type="checkbox" checked={haveBreakfast} 
                onChange={(event) => {
                    setHaveBreakfast(event.target.checked) // value가 아닌 check 상태
                }} />
            <br/>

            <label>요청사항</label>
            <br/>
            <textarea value={msg} 
                onChange={(event) => {
                    setMsg(event.target.value)
                }}></textarea>
            <br/>

            <button type="submit">제출</button>

        </form>
    )
}

export default Reservation