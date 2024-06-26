import React from "react";

function Aside({recentPosts}) {
    // recentPost: 최근 글 제목 링크 ([{name: '', linkUrl: ''}, {name: '', linkUrl: ''}, ......] 배열)
    return (
        <aside>
            <h4>Aside</h4>
            <ul>
                {
                    recentPosts.map((item, index) => {
                        return(
                        <li key={index}>
                            <a href={item.linkUrl}>{item.name}</a>                            
                        </li>
                        )
                    })
                }
            </ul>
        </aside>
    )
}

export default Aside