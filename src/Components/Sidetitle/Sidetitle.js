import React from 'react'

function Sidetitle(props) {
    const title={
        position:"absolute",
        width: "366.27px",
        height: "90.12px",
        left: "1250.39px",
        top: "500.64px",
        fontFamily: 'Oswald',
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "20px",
        lineHeight: "80px",
        letterSpacing:"1em",
        color: "#FFFFFF",
        transform: "rotate(-90deg)", 
    }
  return (
  <h1 style={title}>{props.title}</h1>
  )
}

export default Sidetitle
