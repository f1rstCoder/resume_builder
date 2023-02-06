import React from 'react'
import './Resume.css';
import ProfilePic from '../assets/logo/resume_pic.jpeg';
import { CKEditor } from 'ckeditor4-react';
import Editor from './Editor';

const Resume = () => {

    const handleKeyDown = (evt) => {
        if (evt.keyCode === 13 || evt.innerText.length === 10) {
            evt.preventDefault();
        }
        return (evt.innerText.length <= 20)
    }

    return (
        <div className="container bg-white pl-5 border border-dark shadow-lg mb-5 resumeContainer" >
            <div className="row">
                {/* Left Panel */}
                <div className="col-8">
                    {/* Profile */}
                    <div className='text-start my-3'>
                        <h5 contentEditable="true" placeholder="Enter Section Name..." onKeyDown={handleKeyDown} max="20" className="fw-bold textCol isContentEditable">PROFILE</h5>
                        <Editor />

                    </div>
                    {/* Personal Experience */}
                    <div className="text-start">
                        <h5 contentEditable="true" placeholder="Enter Section Name..." onKeyDown={handleKeyDown} max="20" className="fw-bold textCol isContentEditable">PERSONAL EXPERIENCES</h5>
                        <h5 contentEditable="true" placeholder="Enter Company Name..." onKeyDown={handleKeyDown} max="20" className="px-3 isContentEditable">CS Soft Solutions</h5>
                        <h6 contentEditable="true" placeholder="Enter Company Role..." onKeyDown={handleKeyDown} max="20" className="px-3 isContentEditable">Trainee</h6>
                        <p className='px-3'><i>[<span></span>Mohali, Punjab | Dec 2021- Jan 2022]</i></p>
                        <Editor />
                    </div>
                    {/* Project Work */}
                    <div className="text-start">
                        <h5 contentEditable="true" placeholder="Enter Section Name..." onKeyDown={handleKeyDown} max="20" className="fw-bold textCol isContentEditable">PROJECT WORKS</h5>
                        <h5 contentEditable="true" placeholder="Enter Company Name..." onKeyDown={handleKeyDown} max="20" className="px-3 isContentEditable">Khabar</h5>
                        <Editor />
                    </div>
                    {/* Education */}
                    <div className="text-start">
                        <h5 contentEditable="true" placeholder="Enter Section Name..." onKeyDown={handleKeyDown} max="20" className="fw-bold textCol isContentEditable">EDUCATION</h5>
                        <div className='px-3 my-2'>
                            <h5 contentEditable="true" placeholder="Enter Degree Name..." onKeyDown={handleKeyDown} max="20" className="my-1 isContentEditable">B.E.</h5>
                            <h6 contentEditable="true" placeholder="Enter Educational Institute Name Name..." onKeyDown={handleKeyDown} max="20" className="isContentEditable">Thapar Institute of Engineering and Technology, Patiala</h6>
                            <p className='m-0 p-0'><i>[08/09/2019 - Present 2023]</i></p>
                            <p className='m-0 p-0'><i>[CGPA - 8.27]</i></p>
                        </div>
                        <div className='px-3 my-2'>
                            <h5 contentEditable="true" placeholder="Enter Degree Name..." onKeyDown={handleKeyDown} max="20" className="my-1 isContentEditable">XII-th Class</h5>
                            <h6 contentEditable="true" placeholder="Enter Educational Institute Name Name..." onKeyDown={handleKeyDown} max="20" className="isContentEditable">St. Anne's Convent School, Chandigarh</h6>
                            <p className='m-0 p-0'><i>[05/2017 - 03/2019]</i></p>
                            <p className='m-0 p-0'><i>[Percentage - 85.80%]</i></p>
                        </div>
                        <div className='px-3 my-2'>
                            <h5 contentEditable="true" placeholder="Enter Degree Name..." onKeyDown={handleKeyDown} max="20" className="my-1 isContentEditable">X-th Class</h5>
                            <h6 contentEditable="true" placeholder="Enter Educational Institute Name Name..." onKeyDown={handleKeyDown} max="20" className="isContentEditable">St. Kabir Public School, Chandigarh</h6>
                            <p className='m-0 p-0'><i>[04/2014 - 03/2017]</i></p>
                            <p className='m-0 p-0'><i>[CGPA - 10.00]</i></p>
                        </div>
                    </div>
                    {/* Achievements and Awards */}
                    <div className="text-start">
                        <h5 contentEditable="true" placeholder="Enter Section Name..." onKeyDown={handleKeyDown} max="20" className="fw-bold textCol isContentEditable">ACHIEVEMENTS & AWARDS</h5>
                        <div className='px-3'>
                            <Editor />
                        </div>
                    </div>
                </div>

                {/* Right Panel */}
                <div className="col-4 bgCol text-white">
                    <div>
                        <div className="row container-fluid pt-4 pb-2 px-2 mx-0 justify-content-center ">
                            <img className='image' src={ProfilePic} alt="Profile Pic" width="130px" height="180px" />
                        </div>
                        {/* Name */}
                        <div className="row pt-2 pb-2 text-center textCol">
                            <h5 contentEditable="true" placeholder="Your Name..." onKeyDown={handleKeyDown} max="20" className="fw-bold isContentEditable">RITWIK PATHAK</h5>
                        </div>

                        {/* Icons */}
                        <div className="d-flex flex-column justify-content-center">
                            <div className="col-sm-12 d-flex flex-row align-content-center">
                                <div className="row justify-content-start">
                                    <div className="col-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="rgb(255, 255, 255)" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                                            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                                        </svg>
                                    </div>
                                    <div className="col-10 d-flex flex-row justify-content-start">
                                        <p contentEditable="true" placeholder="Email ID.." onKeyDown={handleKeyDown} max="20" className="align-items-start isContentEditable">ritwikcoding</p><span>@</span><p contentEditable="true" placeholder="Domain.." onKeyDown={handleKeyDown} max="20" className="align-items-start isContentEditable">gmail</p><span>.</span><p contentEditable="true" placeholder="Extension.." onKeyDown={handleKeyDown} max="20" className="align-items-start isContentEditable">com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 d-flex flex-row align-content-center justify-content-start">
                                <div className="row justify-content-start">
                                    <div className="col-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="rgb(255, 255, 255)" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                        </svg>
                                    </div>
                                    <div className="col-10 d-flex flex-row justify-content-start">
                                        <p contentEditable="true" placeholder="Code.." onKeyDown={handleKeyDown} max="20" className="align-items-start isContentEditable">+91</p><span> - </span><p contentEditable="true" placeholder="Number.." onKeyDown={handleKeyDown} max="20" className="align-items-start isContentEditable">9463793058</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 d-flex flex-row align-content-center justify-content-start">
                                <div className="row justify-content-start">
                                    <div className="col-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="rgb(255, 255, 255)" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                        </svg>
                                    </div>
                                    <div className="col-10 d-flex flex-row justify-content-start">
                                        <p contentEditable="true" placeholder="City.." onKeyDown={handleKeyDown} max="20" className="align-items-start isContentEditable">Chandigarh</p><span>, </span><p contentEditable="true" placeholder="Country.." onKeyDown={handleKeyDown} max="20" className="align-items-start isContentEditable">India</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 d-flex flex-row align-content-center justify-content-start">
                                <div className="row justify-content-start">
                                    <div className="col-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="rgb(255, 255, 255)" className="bi bi-linkedin" viewBox="0 0 16 16">
                                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                        </svg>
                                    </div>
                                    <div className="col-10 d-flex flex-row justify-content-start">
                                        <p className='align-items-start'>www.linkedin.com/<span contentEditable="true" placeholder="LinkedIn URL.." onKeyDown={handleKeyDown} max="20" className="align-items-start isContentEditable">in/ritwikpathak0707007/</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 d-flex flex-row align-content-center justify-content-start">
                                <div className="row justify-content-start">
                                    <div className="col-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="rgb(255, 255, 255)" className="bi bi-github " viewBox="0 0 16 16">
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                        </svg>
                                    </div>
                                    <div className="col-10 d-flex flex-row justify-content-start">
                                        <p className='align-items-start'>https://github.com/<span contentEditable="true" placeholder="Github URL.." onKeyDown={handleKeyDown} max="20" className="align-items-start isContentEditable">f1rstCoder</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 d-flex flex-row align-content-center justify-content-start">
                                <div className="row justify-content-start">
                                    <div className="col-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="rgb(255, 255, 255)" className="bi bi-calendar3" viewBox="0 0 16 16">
                                            <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                                            <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                        </svg>
                                    </div>
                                    <div className="col-10 d-flex flex-row justify-content-start">
                                        <p contentEditable="true" placeholder="Day.." onKeyDown={handleKeyDown} max="20" className="align-items-start isContentEditable">06</p><span>-</span><p contentEditable="true" placeholder="Month.." onKeyDown={handleKeyDown} max="20" className="align-items-start isContentEditable">10</p><span>-</span><p contentEditable="true" placeholder="Year.." onKeyDown={handleKeyDown} max="20" className="align-items-start isContentEditable">2001</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* Skills */}
                    <div className="text-start">
                        <h5 contentEditable="true" placeholder="Enter Section Name..." onKeyDown={handleKeyDown} max="20" className="fw-bold textCol isContentEditable">SKILLS</h5>
                        <div className='px-3'>
                            <p className='my-0'><b>Skilled In: </b>C/C++, HTML5, CSS, JavaScript, React.js, Bootstrap 5</p>
                            <p className='my-0'><b>Familiar Technologies: </b>MongoDB</p>
                            <p className='my-0'><b>Software Used: </b>GitHub, VS Code, Visual Studio, Postman, MongoDB Compass</p>
                            <p className='my-0'><b>Knowledge In: </b>Data Structures and Algorithm (DSA), Database Management System (DBMS), Operating Systems (OS), Object Oriented Programming(OOPs)</p>
                        </div>
                    </div>
                    {/* Certificates */}
                    <div className="text-start">
                        <h5 contentEditable="true" placeholder="Enter Section Name..." onKeyDown={handleKeyDown} max="20" className="fw-bold textCol isContentEditable">CERTIFICATES</h5>
                        <h6 contentEditable="true" placeholder="Enter Company Name..." onKeyDown={handleKeyDown} max="20" className="px-3 isContentEditable">Beginning C++ Programming - From Beginner to Beyond</h6>
                        <Editor />

                        <h6 contentEditable="true" placeholder="Enter Company Name..." onKeyDown={handleKeyDown} max="20" className="px-3 isContentEditable">Simplified Approach to DBMS</h6>
                        <Editor />
                    </div>
                    {/* Languages */}
                    <div className="text-start">
                        <h5 contentEditable="true" placeholder="Enter Section Name..." onKeyDown={handleKeyDown} max="20" className="fw-bold textCol isContentEditable">LANGUAGES</h5>
                        <Editor />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume