import React from 'react'
import loading from './loading.gif'

const Spinner = () => {
  return (
    <div className="container text-center my-5">
      <img src={loading} alt='loader' />
    </div>
  )
}

export default Spinner