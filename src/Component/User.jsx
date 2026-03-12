import React, { useContext } from 'react'

const User = () => {
    let a=useContext(userdata)
  return (
      <>
      <h1>{a}</h1>
      </>
  )
}

export default User