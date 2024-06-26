import React, { useState } from "react";

// input 입력 내용 출력: input 초기화, trim 미적용


function NameForm(props) {

    // input에 value를 설정할 때, 함수도 맞게 설정
    const [value, setValue] = useState('')

    // 이벤트가 변경되면 함수 적용
    const handleChange = (event) => {
        setValue(event.target.value) // 사용자가 작성한 value값
        console.log(event.target.value)
    }

    // form 내에서 이벤트 발생시 적용 함수
    const handleSubmit = (event) => {
        event.preventDefault() // 이벤트 실행시 다시 나에게 돌아오는 것을 막음
        alert('입력한 이름:' + value)
    }

    // 
    return(
        <form onSubmit={handleSubmit}>
            <label>이름</label>
            <input type="text" value={value} onChange={handleChange}/> {/* onChange: 변경될 때마다 적용 */}
            <button type="submit">제출</button>
        </form>
    )
}

export default NameForm