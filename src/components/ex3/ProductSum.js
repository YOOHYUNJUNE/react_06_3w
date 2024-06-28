import React from "react";


function ProductSum({cart, removeAll}) {

    const style = {
        box : {
            fontSize: '30px',
            // border: '1px solid black',
            display: 'flex',
            justifyContent: 'space-around',

            
        },

        // 전체 버튼
        button : {
            borderRadius: '8px',
            // justifyContent: 'center',
        },


        // 합계 버튼
        buttonSum : {
            cursor: 'default',
            backgroundColor: 'transparent',
            border: 'none'
        }

    }


    // 합계
    const Sum = cart.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.price
    }, 0)

    return(
        <div style={style.box}>

                <div>
                    <button style={style.button} onClick={removeAll}>전부 취소</button>
                </div>
                <div>
                    <button style={style.buttonSum}>
                        합계: {Sum} 원 <br/>
                    </button>
                </div>
                <div>
                    <button style={style.button}>결제하기</button>
                </div>

        </div>
    )
}

export default ProductSum