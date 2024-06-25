import React from "react";

const style = {
    wrap : {
        width : 500,
        margin : 20,
        padding : 20,
        display : 'flex',
        flexDirection : 'row',
        border : '1px solid #000'
    },
    image : {
        width : 200,
        height : 200,
        borderRadius : 25
    },
    contentContainer : {
        marginLeft : 10,
        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'center'
    },
    commentText : {
        color : 'black',
        fontSize : 20,
        paddingBottom : 20
    },
    dateText : {
        color : 'grey',
        fontSize : 30
    }
}


// 컴포넌트 분리

// userimg 분리
function UserImg(props) {
    return (
        <img
            src={props.user.imgUrl}
            alt={props.user.userName}
            style={style.image}
        />
    )
}

// userinfo
function UserInfo(props) {
    return(
        // 회원정보 출력
        <div >

            {/* 컴포넌트 분리한 userimg */}
            <UserImg user={props.user}/>
        
            <div style={{
                color : 'blue',
                fontSize : 20,
                fontWeight : 'bold'
            }}>
                {props.user.userName}
            </div>
        </div>
    )
}


function Comment(props) {
    return(
        <div className="comment" style={style.wrap}>
            
            {/* 컴포넌트 분리한 userinfo */}
            <UserInfo user={props.user}/>
            {/* <hr></hr> */}

            <div style={style.contentContainer}>
                {/* 댓글 */}
                <div style={style.commentText}>
                    {props.content}
                </div>
                {/* <hr></hr> */}
                {/* 작성시간 */}
                <div style={style.dateText}>
                    {props.replydate}
                </div>
            </div>
                
        </div>
    )
}

export default Comment
