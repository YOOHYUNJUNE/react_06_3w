import React from "react";


function ToolBar({isLogin, onClickLoginHandle, onClickLogoutHandle}) {
        // const {isLogin, onClickLoginHandle, onClickLogoutHandle} = props
        return (
            <div style={{margin:30, padding:5, borderBottom: '1px solid gray'}}>
            {isLogin && <h3>환영합니다.</h3>}
            {
                isLogin ?
                    <button onClick={onClickLogoutHandle}>로그아웃</button>
                    :
                    <button onClick={onClickLoginHandle}>로그인</button>
            }
            </div>
        )

    }




export default ToolBar
