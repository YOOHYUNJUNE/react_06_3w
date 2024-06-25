import React from "react";
import Dialog from "./Dialog";

function WelcomeDialog(props) {
    return (
        <Dialog title="환영합니다!~!" message="회원 정보를 확인해주세요.">
            <button>회원 정보 수정</button> {/* {props.chlidren}에 입력됨 */}
        </Dialog>
    )
}

export default WelcomeDialog





