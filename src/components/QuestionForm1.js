import React from 'react'
import '../css/QuestionForm1.css'

export default function QuestionForm1(props) {

    let {prevPage, nextPage, setBasicDetails, basicDetails} = props;
    
    const onChange = (e)=>{
        setBasicDetails({...basicDetails, [e.target.name]: e.target.value})
        console.log(basicDetails)
    }


    return (
        <>
            <h3 className="heading">Basic Details</h3>

                <div className="row">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" onChange={onChange}/>
                </div>

                <div className="row">
                    <label htmlFor="profession">Profession</label>
                    <input type="text" name="profession" onChange={onChange} />
                </div>

                <div className="row">
                    <label htmlFor="email">Email-id</label>
                    <input type="text" name="email" onChange={onChange} />
                </div>

                <div className="row">
                    <label htmlFor="contact">Contact no.</label>
                    <input type="text" name="contact" onChange={onChange} />
                </div>

                <div className="row">
                    <label htmlFor="linkedin">LinkedIn</label>
                    <input type="text" name="linkedin" onChange={onChange} />
                </div>

                <div className="row">
                    <label htmlFor="address">Address</label>
                    <input type="text" name="address" onChange={onChange} />
                </div>

                <div className="row">
                    <label htmlFor="about">About yourself</label>
                    <input type="text" name="about" onChange={onChange} />
                </div>


                <div className="buttons">
                <button className="btn" onClick={prevPage}>Previous</button>
                <button className="btn" onClick={nextPage}>Next</button>
                </div>
                
        </>

    )
}
