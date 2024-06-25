import React from "react";

function Book(props) {
    return(
        <div>
        <div>오늘의 추천 도서</div>
            <ul>
                <li>이름: {props.bookName}</li>
                <li>출판사: {props.bookPublisher}</li>
                <li>가격: {props.bookPrice}</li>
            </ul>
        </div>
    )
}
export default Book




