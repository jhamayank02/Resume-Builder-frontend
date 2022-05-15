import React from 'react'
import done from '../done.png'
import '../css/Thanks.css'

export default function Thanks() {

  const goToHome = ()=>{
    window.location.replace("https://resumegenerator00.herokuapp.com/");
  }

  return (
    <div className='thanks'>
      <h1>Thank You</h1>
      <div className="text">Your Resume has been downloaded.</div>
      <img src={done} alt="done" />
      <div>
      <button className="btn" onClick={goToHome}>Home</button>
      </div>
    </div>
  )
}
