import React from "react";

function FancyBorder(props) {
    return (
        <div className={'border-' + props.color}> {/* Dialog.js에 사용, color에 따라 className 변경 */}
            {props.children}
        </div>
    )
}

export default FancyBorder




