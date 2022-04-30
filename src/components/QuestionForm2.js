import React, {useState} from 'react'
import '../css/QuestionForm1.css'

export default function QuestionForm2(props) {

    let {prevPage, nextPage, educationDetails, setEducationDetails} = props;

    const [addCount, setAddCount] = useState(0)

    const onChange = (e) => {
        e.target.name = e.target.value
    }

    
    const addFunc = ()=>{
        setAddCount(addCount+1);
        let institute = document.getElementById('institute');
        let degree = document.getElementById('degree');
        let newEdu = {'institute':institute.value, 'degree':degree.value}
        educationDetails[addCount] = newEdu
        setEducationDetails(educationDetails)
        institute.value = '';
        degree.value = '';
    }


  return (
    <>
            <h3 className="heading">Education Details({addCount})</h3>

                <div className="row">
                    <label htmlFor="institute">Education</label>
                    <input type="text" id='institute' name="institute" placeholder='Enter your college/university/instititute name' onChange={onChange}/>
                    <input type="text" id='degree' name="degree" placeholder='Enter your degree' onChange={onChange}/>
                </div>
                
                <div className="btnContainer">
                    <button className="btn" onClick={addFunc}>+ Add</button>
                </div>

                <div className="buttons">
                <button className="btn" onClick={prevPage}>Previous</button>
                <button className="btn" onClick={nextPage}>Next</button>
                </div>
        </>

  )
}
