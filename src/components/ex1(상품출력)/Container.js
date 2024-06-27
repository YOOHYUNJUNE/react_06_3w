import React, { useState } from "react";
import Display from "./Display";
import Detail from "./Detail";

function Container (props) {
    
    // 컨테이너: 하위 컴포넌트의 데이터를 관리
    //          관련된 핸들러 정의
    //          하위 컴포넌트로 필요한 속성 전달

    
    const style = {
        wrapper : {
            padding : 15,
            display : 'flex',
            flexDirection : 'row',
            justifyContent : 'space-around'
        }
    }


    // 상품 식별키, 이름, 가격 객체
    const menus = [
        {mno: 1, name: '상품1', price: 3000},
        {mno: 2, name: '상품2', price: 4000},
        {mno: 3, name: '상품3', price: 5000},
        {mno: 4, name: '상품4', price: 6000},
        {mno: 5, name: '상품5', price: 7000},
    ]

    // 선택된 메뉴 저장
    const [selectedMenu, setSelectedMenu] = useState()
    
    // 이벤트 발생시 전달할 요소
    const changeMenu = (mno) => {
        const menu = menus.find(m => m.mno === mno) // 메뉴의 특정값을 찾아 반환
        setSelectedMenu(menu)
    }

    return (
        // 컨테이너 구성
        <div style={style.wrapper}>
            <Display arr={menus} changeMenu={changeMenu}></Display>
            <Detail menu={selectedMenu}></Detail>
        </div>
    )
}


export default Container