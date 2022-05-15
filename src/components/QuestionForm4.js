import React, {useState} from 'react'
import '../css/QuestionForm.css'

export default function QuestionForm4(props) {

    let {prevPage, nextPage, workExperience,setWorkExperience} = props;

    const [addCount, setAddCount] = useState(0)

    const onChange = (e) => {
        e.target.name = e.target.value
    }

    
    const addFunc = ()=>{
        setAddCount(addCount+1);
        let organization = document.getElementById('organization');
        let summary = document.getElementById('summary');
        let newWorkExp = {"organization": organization.value, "summary": summary.value}
        workExperience[addCount] = newWorkExp
        setWorkExperience(workExperience)
        organization.value = '';
        summary.value = '';
    }

  return (
    <>
            <h3 className="heading">Work Experience</h3>
                <div className="formContainer">
                    <div className="row">
                    <label htmlFor="organization">Previous works({addCount})</label>
                    <input type="text" id='organization' name="organization" placeholder='Enter name of the organization' onChange={onChange} />
                    <input type="text" id="summary" name="summary" placeholder='Enter description' onChange={onChange} />
                </div>
                
                <div className="addBtnContainer">
                    <button className="btn" onClick={addFunc}>+ Add</button>
                </div>
                </div>
                

                <div className="buttons">
                <button className="btn" onClick={prevPage}>Previous</button>
                <button className="btn" onClick={nextPage}>Next</button>
                </div>
        </>

  )
}
