import React, { useState } from 'react'
import '../css/Home.css'
import QuestionForm1 from '../components/QuestionForm1';
import QuestionForm2 from '../components/QuestionForm2';
import QuestionForm3 from '../components/QuestionForm3';
import QuestionForm4 from '../components/QuestionForm4';
import QuestionForm5 from '../components/QuestionForm5';
import {
    BrowserRouter,
    Routes,
    Route,
    useNavigate,
} from "react-router-dom";


export default function Home() {

    const [page, setPage] = useState(1)

    const [basicDetails, setBasicDetails] = useState({
        name: '',
        profession: '',
        email: '',
        contact: '',
        linkedin: '',
        address: '',
        about: '',
    })
    const [educationDetails, setEducationDetails] = useState([])
    const [skills, setSkills] = useState([])    
    const [workExperience, setWorkExperience] = useState([])
    const [projects, setProjects] = useState([])

    let detailsObj = {
            'basicDetails': basicDetails,
    
            'educationDetails': educationDetails,
    
            'skills': skills,
    
            'workExperience': workExperience,
    
            'projects': projects
    }

    console.log(detailsObj);

    const navigate = useNavigate();
    
    const prevPage = ()=>{
        if(page===1){
            setPage(page);
        }
        else{
            if((page-1)===1){
                navigate('/');
            }
            else{
                navigate(`/qf${page-1}`);
            }
            setPage(page-1);
        }
    }

    const nextPage = ()=>{
        if(page===5){
            setPage(page);
        }
        else{
            console.log(page)
            navigate(`/qf${page+1}`);
            setPage(page+1);
        }
    }


    return (
        <div className='mainContainer'>
            <div className="container">
                {/* <BrowserRouter> */}
                    <Routes>

                        <Route exact  path="/" element={<QuestionForm1 page={page} setPage={setPage} prevPage={prevPage} nextPage={nextPage} setBasicDetails={setBasicDetails} basicDetails={basicDetails} />} />

                        <Route  exact path="/qf2" element={<QuestionForm2 page={page} setPage={setPage} prevPage={prevPage} nextPage={nextPage} educationDetails={educationDetails} setEducationDetails={setEducationDetails} />} />

                        <Route  exact path="/qf3" element={<QuestionForm3 page={page} setPage={setPage} prevPage={prevPage} nextPage={nextPage} skills={skills} setSkills={setSkills} />} />

                        <Route  exact path="/qf4" element={<QuestionForm4 page={page} setPage={setPage} prevPage={prevPage} nextPage={nextPage} workExperience={workExperience} setWorkExperience={setWorkExperience} />} />

                        <Route  exact path="/qf5" element={<QuestionForm5 page={page} setPage={setPage} prevPage={prevPage} nextPage={nextPage} projects={projects} setProjects={setProjects} />} />
                        
                    </Routes>
                {/* </BrowserRouter> */}
            </div>
        </div>
    )
}