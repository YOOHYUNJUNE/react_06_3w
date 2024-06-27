import React from "react";

// 컨테이너의 'List'영역

function Display({arr, changeMenu}) {
    return(
        <div style={{border: '3px solid #333', padding: '10px', width: '200px'}}>
            <ul>
                {
                    arr.map(menu => {
                        return(
                            <li key={menu.mno} onClick={() => changeMenu(menu.mno)}>{menu.name}</li>
                        )  
                    })
                }
            </ul>
        </div>
    );
    
}


export default Display