import React from 'react'

const heading={
  maxWidth:'450px',
    fontFamily:'Oswald',
    fontSize:'80px',
    position:'relative',
}
function Heading(props) {

  return (
      <h1 style={heading} >{props.title}</h1>
  
  )
}

export default Heading
