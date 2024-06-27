import React, { useEffect, useState } from "react";

// function box(props) {
//     return(
//         <div>
//             <h1>{props.title}</h1>
//             <p>{props.message}</p>
//         </div>
//     )
// } 

let room = []

function Test(props) {
    const [comment, setComment] = useState('')

    const handleClick = (event) => {
        room.push(comment)
        setComment('')
        // alert('댓글이 작성되었습니다.')
    }

    return(

        <div className="card">
            <textarea type="text" value={comment}
                onChange={(event) => {
                    setComment(event.target.value)
                }}/>
            <button onClick={handleClick}>제출</button>

            <hr/>
    
            <div className="main">
                {

                room.map((comment, index) => {
                    return <p key={index}>{comment}</p>
                })

                }
            </div>

            <hr/>

            <span className="date">
                <h4>날짜 : </h4>
                <h4>시간 : </h4>
            </span>
            {props.children}

        </div>

    )
}

// 날짜 및 시간

// fuction CurrentDateTime() {
//     const [currentDateTime, setCurrentDateTime] = useState();

//     useEffect(() => {

//     })
    
// }







export default Test