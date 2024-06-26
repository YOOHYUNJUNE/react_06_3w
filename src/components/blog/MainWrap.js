import React from "react"
import Article from "./Article"
import Aside from "./Aside"

function MainWrap({posts, recentPosts}) {
    
    // title, date, imgUrl, content가 포함된 posts 정의

    // let posts = [
    //     {title: 'aaa', date: '2024.06.21', imgUrl: 'son_01.jpg', content: '안녕하세요.1'},
    //     {title: 'bbb', date: '2024.06.23', imgUrl: 'son_01.jpg', content: '안녕하세요.2'},
    //     {title: 'ccc', date: '2024.06.25', imgUrl: 'son_01.jpg', content: '안녕하세요.3'},
    // ]

    // let recentPosts = [
    //     {name: '111', linkUrl: '#'},
    //     {name: '222', linkUrl: '#'},
    //     {name: '333', linkUrl: '#'},
    // ]

    return (
        <div id="wrap">
            <section> 
                {
                    posts.map((post, index) => {
                        return (
                            <Article key={index}
                                title={post.title}
                                date={post.date}
                                imgUrl={post.imgUrl}
                                content={post.content}
                            ></Article>
                        )
                    })
                }
            </section>
            <Aside recentPosts={recentPosts}></Aside>
        </div>
    )
}

export default MainWrap