import React, { useState } from 'react'
// import { useState } from 'react'
// import React from 'react'
import '../css/QuestionForm.css'



export default function QuestionForm5(props) {

    let { prevPage, projects, setProjects, createResume } = props;
    const [addCount, setAddCount] = useState(0)

    const onChange = (e) => {
        e.target.name = e.target.value
    }

    const addFunc = () => {
        setAddCount(addCount + 1);
        let projectName = document.getElementById('projectName');
        let projectSummary = document.getElementById('projectSummary');
        let newProject = { 'projectName': projectName.value, 'projectSummary': projectSummary.value }
        projects[addCount] = newProject;
        setProjects(projects)
        projectName.value = '';
        projectSummary.value = '';
    }

    return (
        <>
            <h3 className="heading">Projects({addCount})</h3>
            <div id="container">

                <div className="formContainer">
                    <div className="row">
                        <label htmlFor="projectName">Project</label>
                        <input type="text" id="projectName" name="projectName" placeholder="Enter project's name" onChange={onChange} />
                        <input type="text" id="projectSummary" name="projectSummary" placeholder="Write something about your project" onChange={onChange} />
                    </div>
                    <div className="addBtnContainer">
                        <button className="btn" onClick={addFunc}>+ Add</button>
                    </div>
                </div>
            </div>




            <div className="buttons">
                <button className="btn" onClick={prevPage}>Previous</button>
                <button className="btn" onClick={createResume}>Create Resume</button>
            </div>
        </>

    )
}
