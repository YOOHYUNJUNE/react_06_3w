import React from "react";
import ToolBar from "./ToolBar";

// isLogin  ToolBar => 로그인 상태 전달, 로그인, 로그아웃 핸들러





    function MainPage(props) {
        return (
            <>
             <ToolBar
                isLogin={isLogin}
                onClickLoginHandle={onClicklogin}
                onClickLogoutHandle={onClickLogout}
            ></ToolBar>   
            안녕하세요.    


            <>


        )

    }

export default MainPage
