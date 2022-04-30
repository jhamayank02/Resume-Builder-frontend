import React, {useState} from 'react'
import '../css/QuestionForm1.css'

export default function QuestionForm5(props) {

    let { prevPage, nextPage, projects, setProjects } = props;
    const [addCount, setAddCount] = useState(0)

    const onChange = (e) => {
        e.target.name = e.target.value
    }

    
    const addFunc = ()=>{
        setAddCount(addCount+1);
        let projectName = document.getElementById('projectName');
        let projectSummary = document.getElementById('projectSummary');
        let newProject = {'projectName': projectName.value, 'projectSummary': projectSummary.value}
        projects[addCount] = newProject;
        setProjects(projects)
        projectName.value = '';
        projectSummary.value = '';
    }

    return (
        <>
            <h3 className="heading">Projects({addCount})</h3>
            <div id="container">

                <div className="row">
                    <label htmlFor="projectName">Project</label>
                    <input type="text" id="projectName" name="projectName" placeholder="Enter project's name" onChange={onChange} />
                    <input type="text" id="projectSummary" name="projectSummary" placeholder="Write something about your project" onChange={onChange} />
                </div>

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
