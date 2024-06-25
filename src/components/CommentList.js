import React from "react";
import Comment from "./Comment";

// Comment를 불러와서, 여러개의 comment 출력하기

// 댓글 유저 정보
let comments = [
    {
        user: {
            imgUrl: '/image/son_01.jpg',
            userName: '손흥민1'},
        content: '1등이다~',
        replydate: '2024.06.20'
    },
    {
        user: {
            imgUrl: '/image/son_01.jpg',
            userName: '손흥민2'},
        content: '1등이다~',
        replydate: '2024.06.22'
    },
    {
        user: {
            imgUrl: '/image/son_01.jpg',
            userName: '손흥민3'},
        content: '1등이다~',
        replydate: '2024.06.21'
    }
]

function CommentList() {
    return ( 
        <div>
        {
        comments.map((comment, index) => { // index를 추가하여 고유한 키값을 부여(각 댓글에 cno:1 등으로 고유값 부여시 생략)
            return ( // key= {comment.cno}
                <Comment key={index} user={comment.user} content={comment.content} replydate={comment.replydate}></Comment>

            )
        })
        }
        </div>
    )
}

export default CommentList


