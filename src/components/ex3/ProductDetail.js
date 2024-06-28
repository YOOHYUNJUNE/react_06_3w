import React from "react";

// 오른쪽에 출력될 데이터
function ProductDetail ({cart, removeMenu}) {


    const style = {
        // Detail style
        Detail : {
            width : 150,
            height : 120,
            display : 'inline-block',
            border : '1px solid black',
            textAlign : 'center',
            backgroundSize : 'contain',
            
        }
    }


    return(
        <div >
            <ul>
                {
                    cart.map((menu, index) => {
                        // 장바구니 이미지

                        return <li key={index} style={{...style.Detail, backgroundImage:`url(${menu.img})`}}>
                            <p>{menu.name}</p>
                            <p>{menu.price} 원</p>
                            {/* <img src={menu.img} /> */}
                            <button onClick={() => removeMenu(index)}>X</button>
                            - X개 -
                            
                        </li>
                    })
                }

            </ul>
        </div>
    )
}


export default ProductDetail