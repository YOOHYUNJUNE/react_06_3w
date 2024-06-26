import React, { useState } from "react";
import Dialog from "./Dialog";

// 박스 구역 내 회원가입

let room = []

function SignUpDialog(props) {

    const [userName, setUserName] = useState('')

    // user를 명단에 추가
    const handleClick = (event) => {
        // 이후 배열room에 추가
        room.push(userName)
        setUserName('')
        alert(`환영합니다~! ${userName}님`)
    }

    return (
        <Dialog title="스터디 팀 참여" message="이름을 입력하세요.">
            <input type="text" value={userName}
                onChange={(event) => {
                    setUserName(event.target.value)
                }} />
            
            <button onClick={handleClick}>참여하기</button>

            {/* 명단을 출력 */}
            <div>
                {
                    room.map((name, index) => {
                        return <p key={index}>{name}</p>
                    })
                }
            </div>
            
        </Dialog>
    )
}

export default SignUpDialog