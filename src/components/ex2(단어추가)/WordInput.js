import React, { useState } from "react";

// addWord 함수에서 단어를 받아 출력

function WordInput({addWord}) {

    const [text, setText] = useState('')

    // 이벤트 발생시 호출되는 함수
    const changeText = (event) => {
        setText(event.target.value)
    }

    // 단어 추가를 누르면, value를 word 배열에 넣기
    const ClickAdd = () => {
        addWord(text)
        setText('')
    }

    return(
        <div style={{border: '3px solid #333', padding: 10, width: 200}}>
            <input 
                type="text"
                value={text}
                onChange={e => changeText(e)}    
            />
            <button onClick={ClickAdd}>단어 추가</button>
        </div>
    )
}

export default WordInput