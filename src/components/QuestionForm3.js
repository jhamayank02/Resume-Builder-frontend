import React, {useState} from 'react'
import '../css/QuestionForm.css'

export default function QuestionForm3(props) {

    let {prevPage, nextPage, skills, setSkills} = props;
    
    const [addCount, setAddCount] = useState(0)

    const onChange = (e) => {
        e.target.name = e.target.value;
    }

    
    const addFunc = ()=>{
        setAddCount(addCount+1);
        let skill = document.getElementById('skill');
        skills[addCount] = skill.value
        setSkills(skills)
        skill.value = '';
    }

  return (
    <>
            <h3 className="heading">Skills({addCount})</h3>

            <div className="formContainer">
                <div className="row">
                    <label htmlFor="skill">Skill</label>
                    <input type="text" id='skill' name="skill" placeholder='Enter your skill' onChange={onChange} />
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
