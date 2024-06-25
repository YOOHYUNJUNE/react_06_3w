import React from "react";
import Card from "./Card";


// Card의 style을 미리 만들어 놓고 출력
function ProfileCard(props) {
    return (
        <Card title='손흥민'>
        {/* <Card title='손흥민' backgroundColor='yellow'> */}
            <p>안녕하세요. 축구선수 손흥민입니다.</p>
            <p>저는 축구를 잘합니다.</p>
        </Card>
    )
}

export default ProfileCard



