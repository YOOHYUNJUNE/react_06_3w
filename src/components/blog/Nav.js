import React from "react";

function Nav({nav}) {

    // 메뉴 데이터: 배열[{name: '', linkUrl: ''}, {}, {}...] .map 반복
    return (
        <nav>
            <ul>
                {
                    nav.map((menu, index) => { // react에서 반복할 때 key를 받아야 하므로 index 포함
                        return (
                            <li key={index}>
                                <a href={menu.linkUrl}>{menu.name}</a>
                            </li>
                        )
                    }) 
                }
            </ul>
        </nav>
    )
}

export default Nav