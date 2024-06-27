import React from "react";

function Detail({menu}) {

    // 데이터가 넘어오지 않을 때
    if(!menu) {
        return (
            <div>선택된 상품이 없습니다.</div>
        )
    }

    // 오른쪽에 출력될 데이터
    return (
        <div style={{border : '3px solid #333', padding : 10, width : 200}}>
            <h3>{menu.mno}</h3>
            <p>{menu.name}</p>
            <p>{menu.price}</p>
        </div>
    )
}

export default Detail