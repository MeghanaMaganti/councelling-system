import React from 'react'

function Hello(props) {
   
  return (
    <div>
         <h1>Hello KLU {props.name}</h1>
         {props.children}
    </div>
  )
}

export default Hello