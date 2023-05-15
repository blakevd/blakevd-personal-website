import { Link } from "react-router-dom";
import linkedin from '../images/linked-in.svg';
import git from '../images/github-mark.svg';

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
                            <img src={linkedin} alt="LinkedIn" height="26" width="auto" />
                        </Link>
                        <Link to="https://github.com/blakevd" target="_blank" className = "about-links">
                            <img src={git} alt="Github" height="26" width="auto" />
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