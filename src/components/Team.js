import React from "react";
import Player from "./Player";

const style = {
    team : {
        border : '1px solid black'
    }
}



let team = [
    {name: '손흥민01', no: '01'},
    {name: '손흥민02', no: '02'},
    {name: '손흥민03', no: '03'},
]

function Team(props) {
    return (
        <div style={style.team}>
            {
                team.map((player) => {
                    return (
                        <Player playerName={player.name} playerNumber={player.no}></Player>
                    )
                })
            }
        </div>
    )
}




export default Team











