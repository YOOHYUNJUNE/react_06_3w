import React, { useState } from "react";
import ProductDetail from "./ProductDetail";
import ProductDisplay from "./ProductDisplay";
import Display from "../ex1(상품출력)/Display";





function ProductContainer(props) {
    
    const style = {
        // contain
        Contain : {
            display : 'flex',
            flexDirection : 'row',
            justifyContent : 'space-around',
            // textAlign : 'center'
        },

        // Display
        // Display : {
        //     textAlign : 'center'
        // },

        // Detail style
        Detail : {
            width : '80%',
        }
    }


    // 제품 목록
    const menus = [
        {mno: 1, name: '핫 아메리카노', price: 2000},
        {mno: 2, name: '아이스 아메리카노', price: 2000},
        {mno: 3, name: '핫 카페라떼', price: 3000},
        {mno: 4, name: '아이스 카페라떼', price: 3000},
        {mno: 5, name: '에스프레소', price: 2000},
        {mno: 6, name: '콜드브루', price: 4000},
        {mno: 7, name: '디카페인 콜드브루', price: 4000},
        {mno: 8, name: '딸기 스무디', price: 5000},
        {mno: 9, name: '바나나 스무디', price: 5000},
    ]

    // 제품 추가
    const [cart, setSelectedMenu] = useState([])

    // 클릭 시 전달할 요소 / .find: 특정 값을 찾아 반환
    const changeMenu = (mno) => {
        const menu = menus.find(m => m.mno === mno)
        setSelectedMenu([...cart, menu])
    }

    // 제품 삭제
    const removeMenu = (mno) => {
        const newCart = cart.filter((item, index) => mno !== index)
        setSelectedMenu([...newCart])
    }


    return(
        <div style={style.Contain}>
            <div style={style.Display}>
                <ProductDisplay productList={menus} changeMenu={changeMenu}></ProductDisplay>

            </div>
            <div style={style.Detail}>
                <ProductDetail cart={cart} removeMenu={removeMenu} style={style.Detail}></ProductDetail>

            </div>
        </div>
    )
}

export default ProductContainer