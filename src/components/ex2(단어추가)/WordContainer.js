import React, { useState } from "react";
import WordInput from "./WordInput";
import WordList from "./WordList";

function WordContainer() {

    const style = {
        wrapper : {
            padding : 15,
            display : 'flex',
            flexDirection : 'row',
            justifyContent : 'space-around'
        }
    }

    // 단어들을 가지는 배열
    const [words, setWords] = useState(['AAA', 'BBB', 'CCC'])

    // 단어 추가: 기존 배열 + 함수 word
    const addWord = (word) => {
        setWords([...words, word])
    }

    // 단어 삭제
    const removeWord = (word) => {
        // '삭제'한 단어를 제외한 새로운 배열을 생성 / 단어가 같으면 함께 삭제됨...
        const filteredWords = words.filter(w => w !== word)
        setWords([...filteredWords])
    }

    return(
        <div style={style.wrapper}>
            <WordInput addWord={addWord}></WordInput>
            <WordList words={words} removeWord={removeWord}></WordList>
        </div>
    )
}

export default WordContainer