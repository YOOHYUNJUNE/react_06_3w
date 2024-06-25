import React from "react";

function Library(props) {
    return(
        <div>
            <Book bookName='쉽게배우는 자바' bookPublisher='학지사' bookPrice='30000'></Book>
            <Book bookName='쉽게배우는 파이썬' bookPublisher='소담' bookPrice='20000'></Book>
            <Book bookName='만화로배우는 리액트' bookPublisher='도서출판미래' bookPrice='10000'></Book>
            <Book bookName='쉽게배우는 자바' bookPublisher='이지스퍼블리싱' bookPrice='20000'></Book>
        </div>
    )
}
export default Library




