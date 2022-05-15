import React from 'react'
import '../css/QuestionForm.css'

export default function QuestionForm1(props) {

    let {prevPage, nextPage, setBasicDetails, basicDetails, page} = props;
    
    const onChange = (e)=>{
        setBasicDetails({...basicDetails, [e.target.name]: e.target.value})
    }

    return (
        <>
            <h3 className="heading">Basic Details</h3>

            <div className="formContainer">
                <div className="row">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" placeholder="Enter your full name" onChange={onChange} />
                </div>

                <div className="row">
                    <label htmlFor="profession">Profession</label>
                    <input type="text" name="profession" placeholder="e.g. Software developer" onChange={onChange} />
                </div>

                <div className="row">
                    <label htmlFor="email">Email-id</label>
                    <input type="text" name="email" placeholder="e.g. your-email@example.com" onChange={onChange} />
                </div>

                <div className="row">
                    <label htmlFor="contact">Contact no.</label>
                    <input type="text" name="contact" placeholder="e.g. 1234567890" onChange={onChange} />
                </div>

                <div className="row">
                    <label htmlFor="linkedin">LinkedIn</label>
                    <input type="text" name="linkedin" placeholder="e.g. CoderFromMars" onChange={onChange} />
                </div>

                <div className="row">
                    <label htmlFor="address">Address</label>
                    <input type="text" name="address" placeholder="e.g. Mars" onChange={onChange} />
                </div>

                <div className="row">
                    <label htmlFor="about">About yourself</label>
                    <input type="text" name="about" placeholder="e.g. A coder from Mars" onChange={onChange} />
                </div>
            </div>

                


                <div className="buttons">
                <button className="btn" style={page===1?{backgroundColor: '#bfbfbf'}: ''} onClick={prevPage}>Previous</button>
                <button className="btn" onClick={nextPage}>Next</button>
                </div>
        </>

    )
}
