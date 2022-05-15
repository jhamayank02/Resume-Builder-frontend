import React from 'react'
import spinner from '../spinner.gif'
import '../css/Spinner.css'

export default function Spinner() {
  return (
    <div className='spinner'>
        <img src={spinner} alt="spinner" />
      <div className="text">Generating your resume...</div>
    </div>
  )
}
