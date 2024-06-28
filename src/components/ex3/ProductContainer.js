import React, { useState } from "react";
import ProductDetail from "./ProductDetail";
import ProductDisplay from "./ProductDisplay";
import Display from "../ex1(상품출력)/Display";
import ProductSum from "./ProductSum";





function ProductContainer(props) {
    
    const style = {
        // contain
        Contain : {
            // display : 'flex',
            // flexDirection : 'row',
            // justifyContent : 'space-around',
            // textAlign : 'center'
            // margin: '10px'
        },

        // Display
        Display : {
            textAlign : 'center',
            margin : '20px',
            // border : '1px solid black',
            // overflowX : 'auto',

        },

        // Detail style
        Detail : {

        }
    }


    // 제품 목록
    const menus = [
        {mno: 1, name: '핫 아메리카노', price: 2000, img: '/img/아메리카노_핫.jpg'},
        {mno: 2, name: '아이스 아메리카노', price: 2000, img: '/img/아메리카노_아이스.jpg'},
        {mno: 3, name: '핫 카페라떼', price: 3000, img: '/img/카페라떼_핫.jpg'},
        {mno: 4, name: '아이스 카페라떼', price: 3000, img: '/img/카페라떼_아이스.jpg'},
        {mno: 5, name: '에스프레소', price: 2000, img: '/img/에스프레소.jpg'},
        {mno: 6, name: '콜드브루', price: 4000, img: '/img/콜드브루.jpg'},
        {mno: 7, name: '디카페인 콜드브루', price: 4000, img: '/img/콜드브루_디카페인.jpg'},
        {mno: 8, name: '딸기 스무디', price: 5000, img: '/img/스무디_딸기.jpg'},
        {mno: 9, name: '망고 스무디', price: 5000, img: '/img/스무디_망고.jpg'},
    ]

    // 제품 추가
    const [cart, setSelectedMenu] = useState([])

    // 클릭 시 전달할 요소 / .find: 특정 값을 찾아 반환
    const changeMenu = (mno) => {
        const menu = menus.find(m => m.mno === mno)
        setSelectedMenu([...cart, menu])
    }

    // 제품 단품 취소
    const removeMenu = (mno) => {
        const newCart = cart.filter((item, index) => mno !== index)
        setSelectedMenu([...newCart])
    }

    // 제품 전체 취소
    const removeAll = (mno) => {
        setSelectedMenu([])
    }


    return(
        <div style={style.Contain}>
            <div style={style.Display}>
                <ProductDisplay productList={menus} changeMenu={changeMenu}></ProductDisplay>
                <hr/>
                
                <ProductSum cart={cart} removeAll={removeAll}></ProductSum>
                <hr/>
            </div>
            <div style={style.Detail}>
                <ProductDetail cart={cart} removeMenu={removeMenu} style={style.Detail}></ProductDetail>

            </div>
        </div>
    )
}

export default ProductContainer