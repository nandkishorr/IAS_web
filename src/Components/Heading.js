import React from 'react'

const heading={
    fontFamily:'Oswald',
    fontSize:'80px'
}
function Heading(props) {

  return (
    <div>
      <h1 style={heading}>{props.title}</h1>
    </div>
  )
}

export default Heading
