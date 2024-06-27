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
            textAlign : 'center'
        }

    }


    return(
        <div >
            <ul>
                {
                    cart.map((menu, index) => {
                        return <li key={index} style={style.Detail}>
                            {/* <h3>{menu.mno}</h3> */}
                            <p>{menu.name}</p>
                            <p>{menu.price} 원</p>
                            <button onClick={() => removeMenu(index)}>삭제</button>
                            
                        </li>
                    })
                }

            </ul>
        </div>
    )
}


export default ProductDetail