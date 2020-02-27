import React from 'react'



const OwnerProfile = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.first_name}</h1>
    </div>
  
  )
}

export default OwnerProfile