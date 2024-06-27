import React from "react";
import Dialog from "../Dialog";

const style = {
    img : {
        // width : '100%',
        // height : '100%'
    }
}

function Article({title, date, imgUrl, content}) {
    return (

        <article>
            <h2>{title}</h2>
            <p>{date}</p>
            <img src={imgUrl} style={style.img}/>
            <p>{content}</p>
        </article>

    )
}

export default Article