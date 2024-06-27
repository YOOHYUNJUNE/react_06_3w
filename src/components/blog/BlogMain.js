import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import MainWrap from "./MainWrap";
import Aside from "./Aside";
import Footer from "./Footer";

// BlogMain: header, nav, main(article, aside), footer

const blogData = {
    // header: {
    //     title: 'React.js',
    //     description: 'react blog',
    // },
    // nav의 경우 배열[]
    nav: [
        {name: 'html5', linkUrl: '#'},
        {name: 'CSS', linkUrl: '#'},
        {name: 'JavaScript', linkUrl: '#'},
        {name: 'React.js', linkUrl: '#'},
        {name: 'Jquery', linkUrl: '#'}
    ],
    mainWrap: {
        posts: [
            {title: 'aaa', date: '2024.06.21', imgUrl: 'son_01.jpg', content: '안녕하세요.1'},
            {title: 'bbb', date: '2024.06.23', imgUrl: 'son_01.jpg', content: '안녕하세요.2'},
            {title: 'ccc', date: '2024.06.25', imgUrl: 'son_01.jpg', content: '안녕하세요.3'},
        ],
        recentPosts: [
            {name: '111', linkUrl: '#'},
            {name: '222', linkUrl: '#'},
            {name: '333', linkUrl: '#'},
        ],
    },
    copyright: 'copyright by son'
}

const style = {
    container : {
        width : '800px',
        margin : '5px auto',
        border : '1px solid #000',
        alignItems : 'center',
        
    },

}

function BlogMain(props) {
    return (
        <main style={style.container}>
        <div>
            <Header></Header>
            <hr></hr>
            <Nav nav={blogData.nav}></Nav>
            <hr></hr>
            <MainWrap posts={blogData.mainWrap.posts} recentPosts={blogData.mainWrap.recentPosts}></MainWrap>
            <hr></hr>
            <Footer copyright={blogData.copyright}></Footer>
        </div>
        </main>
    )
}

export default BlogMain
