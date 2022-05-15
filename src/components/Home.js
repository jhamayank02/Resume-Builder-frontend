import React, { useState } from 'react'
import '../css/Home.css'
import QuestionForm1 from '../components/QuestionForm1';
import QuestionForm2 from '../components/QuestionForm2';
import QuestionForm3 from '../components/QuestionForm3';
import QuestionForm4 from '../components/QuestionForm4';
import QuestionForm5 from '../components/QuestionForm5';
import {
    Routes,
    Route,
    useNavigate,
} from "react-router-dom";
import Spinner from './Spinner';
import Thanks from './Thanks';

export default function Home() {

    const [page, setPage] = useState(1)

    const [loading, setLoading] = useState(0)
    // 0 -> not loading
    // 1 -> loading
    // 2 -> downloaded

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
            navigate(`/qf${page+1}`);
            setPage(page+1);
        }
    }

    const createResume = ()=>{
        setLoading(1)
        console.log("Fetching")
        let url = 'https://resumegenerator02.herokuapp.com/createresume';
        let data = detailsObj;

        let params = {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }

        fetch(url, params).then((res) => { return res.blob(); })
        .then((data) => {
          var a = document.createElement("a");
          a.href = window.URL.createObjectURL(data);
          a.download = "FILENAME";
          a.click();
        });
        setLoading(2)
        console.log("Fetched")
    }


    return (
        <div className='mainContainer'>
            <div className="container">
                {loading===0 && <Routes>

                        <Route exact  path="/" element={<QuestionForm1 page={page} setPage={setPage} prevPage={prevPage} nextPage={nextPage} setBasicDetails={setBasicDetails} basicDetails={basicDetails} createResume={createResume} />} />

                        <Route  exact path="/qf2" element={<QuestionForm2 page={page} setPage={setPage} prevPage={prevPage} nextPage={nextPage} educationDetails={educationDetails} setEducationDetails={setEducationDetails} />} />

                        <Route  exact path="/qf3" element={<QuestionForm3 page={page} setPage={setPage} prevPage={prevPage} nextPage={nextPage} skills={skills} setSkills={setSkills} />} />

                        <Route  exact path="/qf4" element={<QuestionForm4 page={page} setPage={setPage} prevPage={prevPage} nextPage={nextPage} workExperience={workExperience} setWorkExperience={setWorkExperience} />} />

                        <Route  exact path="/qf5" element={<QuestionForm5 page={page} setPage={setPage} prevPage={prevPage} nextPage={nextPage} projects={projects} setProjects={setProjects}  createResume={createResume} />} />
                        
                    </Routes>}

                {loading===1 && <Spinner />}

                {loading===2 && <Thanks />}
            </div>
        </div>
    )
}