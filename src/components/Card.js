import React from "react";

// 카드 만들기
function Card({title, backgroundColor, children}) {
    return (
        <div id="container">
            <div className="card">
            {title && <h1>{title}</h1>}
            {children}
            </div>
            <div className="card">
            {title && <h1>{title}</h1>}
            {children}
            </div>
            <div className="card">
            {title && <h1>{title}</h1>}
            {children}
            </div>
            <div className="card">
            {title && <h1>{title}</h1>}
            {children}
            </div>


            {/* <div style={{
                width : 400,
                height : 400,
                margin : 100,
                padding : 10,
                borderRadius : 5,
                fontSize : 20,
                boxShadow : "0px 0px 100px gray",
                backgroundColor : backgroundColor || "#888", // background가 지정되지 않은 경우
                backgroundImage : "url('/image/son_01.jpg')"
            }}>
                
                {title && <h1>{title}</h1>}
                {children}
            </div> */}
            
        </div>
    )
}

export default Card



