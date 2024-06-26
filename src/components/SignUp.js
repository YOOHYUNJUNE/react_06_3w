import React, { useState } from "react";


    // 이름 및 성별

function SignUp(props) {

    // text input
    const [userName, setUserName] = useState('')

    // select
    const [gender, setGender] = useState('M')

    return(
        <form onSubmit={(event) => {
            event.preventDefault()
            alert(`이름: ${userName}, 성별: ${gender}`)
        }}>
            <label>이름</label>
            <input 
                type="text" 
                value={userName} 
                onChange={(event) => {
                    setUserName(event.target.value)
                }} />
            <br/>
            <label>성별</label>
            <select 
                value={gender}
                onChange={(event) => {
                    setGender(event.target.value)
                }}>
                <option selected value='M'>남</option>
                <option value='F'>여</option>
            </select>
            <br/>
            <button type="submit">제출</button>
        </form>
    )
}

export default SignUp