import { useState } from "react";

const Square=({value,onSquareClick})=>{

    return(
        <button className="square" onClick={onSquareClick}>
            {value}
            {console.log('here 2')}
        </button>
    )
}

export default Square;