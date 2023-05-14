import { Link } from "react-router-dom";
import linkedin from '../images/linked-in.svg';

const About = () => {
    return (
        <div className = "page-overlay about">
            <div className="left-col">
                <div className="card card-me">
                    <div className="card-body">
                        <h2 className="card-title">About Me</h2>
                        <p className="card-text">
                            I am a versitile programmer and a student/Senior at the University of Utah. I have strong foundation in Computer Science and experience
                            in many areas, feel free to check out my projects. When I'm not coding, you can find me hanging out with friends, snowboarding, cooking or at the gym.
                        </p>
                        <h2 className="card-title">Skills</h2>
                        <p className="card-text">
                        <strong>Languages</strong><br/> C, Python, MySQL, C++, Assembly/MIPS/x86, C#, Java, Lua, R, JavaScript, BASIC
                        <br/><br/>
                        <strong>Tools</strong><br/> Visual Studio, Visual Studio Code, Git/Github, IDLE, Docker, Linux, RStudio, Unity, MARS, Eclipse,
                        Node.js, Qt, Microsoft Office Suite, Photoshop, Adobe Illustrator, LaTex
                        </p>
                        <Link to="https://www.linkedin.com/in/blake-van-dyken-610a3b211/" target="_blank" className = "about-links">
                            <img src={linkedin} alt="LinkedIn" />
                        </Link>
                        <Link to="https://github.com/blakevd" target="_blank" className = "about-links">
                            <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" className="octicon octicon-mark-github v-align-middle">
                                <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" fill="#ffffff"> </path>
                            </svg>
                        </Link>
                    </div>
                    
                </div>
                <div className="description">
                    <h1>Education</h1>
                    <div className="edu">
                        <p className="title"><strong>University of Utah</strong>, Salt Lake City UT</p>
                        <p className="details"><strong>Expected 2024</strong> Bachelor’s in Computer Science</p>
                        <ul>
                            <li>GPA: 3.5</li>
                            <li>
                                Notable Studied Subjects:<br/> 
                                Computer Security, Computer Systems, Computer Organization,
                                Database Systems, Algorithms, Intro/Theory to Scientific Computing
                            </li>
                        </ul>
                    </div>
                    <h1>Experience</h1>
                    <div className="Exp">
                        <p className="title"><strong>Teaching Assistant, Software Practices II</strong><br/>Aug 2023 - May 2023</p>
                        <ul>
                            <li>Instruct weekly coding labs for 20+ students</li>
                            <li>Grade coding assignments, projects, and labs regarding the professors and University’s standards</li>
                            <li>Hold office hours to teach students seeking help on course materials they are struggling with</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="right-col">
                
            </div>
        </div>
    )
}

export default About;