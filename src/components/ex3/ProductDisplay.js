import React, { useState } from "react";
import Display from "../ex1(상품출력)/Display";

// 왼쪽 제품 목록
function ProductDisplay({productList, changeMenu}) {

    const style = {
        Display : {
            border : '1px solid black',
            width : 200,
            padding : 15,
            listStyleType : 'none'
            // textAlign : 'center',
        }
    }

    return (
        <div >
            <ul style={style.Display}>
                {
                    productList.map(menu => {
                        return(
                            <li key={menu.mno} onClick={() => changeMenu(menu.mno)}>{menu.name}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default ProductDisplay