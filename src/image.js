import React from 'react'

function Img({ src }) {
    let imgStyles={
        width:100+"%",
        heigth:"auto"
    }
    return <img src={src} alt="img" style={imgStyles}></img>
}

export default Img;