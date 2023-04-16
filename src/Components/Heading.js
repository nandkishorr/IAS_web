import React from 'react'

const heading={
  width:'340px',
    fontFamily:'Oswald',
    fontSize:'80px',
    position:'relative',
    margin:"none"
}
function Heading(props) {

  return (
      <h1 style={heading} >{props.title}</h1>
  
  )
}

export default Heading
