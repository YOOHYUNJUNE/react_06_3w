import React, { useState } from "react";
import Display from "../ex1(상품출력)/Display";

// 왼쪽 제품 목록
function ProductDisplay({productList, changeMenu}) {

    const style = {
        Display : {
            // border : '1px solid black',
            // width : 200,
            padding : 15,
            listStyleType : 'none',
            // textAlign : 'center',
            
            display: 'flex',
            flexWrap: 'wrap',
            // justifyContent: 'flex-start',
        },

        Item : {
            width: '19%',
            margin: '5px',
            padding: '5px',
            cursor: 'pointer',
            border: '2px solid black',
            borderRadius: '10px',
        },

        Img : {
            width: '200px',
            height: '200px'
        }
    }

    return (
        <div >
            <ul style={style.Display}>
                {
                    productList.map(menu => {
                        return(
                            <li key={menu.mno}
                                style={style.Item}
                                onClick={() => changeMenu(menu.mno)}
                                >
                                <img src={menu.img} alt={menu.name} style={style.Img}></img>
                                {menu.name}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default ProductDisplay