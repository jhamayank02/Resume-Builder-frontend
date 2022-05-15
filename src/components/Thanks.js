import React from 'react'
import done from '../done.png'
import '../css/Thanks.css'

export default function Thanks(props) {
  return (
    <div className='thanks'>
      <h1>Thank You</h1>
      <div className="text">Your Resume has been downloaded.</div>
      <img src={done} alt="done" />
    </div>
  )
}
