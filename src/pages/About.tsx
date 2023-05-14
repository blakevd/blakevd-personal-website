import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className = "page-overlay about">
            <div className="left-col">
                <div className="card card-me">
                    <div className="card-body">
                        <h2 className="card-title">About Me</h2>
                        <p className="card-text">
                            I am a versitile programmer and a student at the University of Utah
                            <a href="https://www.linkedin.com/in/joshua-harrison-7a2008100/">
                                Joshua Harrison
                            </a>
                        </p>
                        <Link to="/contact" className="btn btn-primary">
                            Contact Me
                        </Link>
                    </div>
                </div>
                <h1>Educational Background</h1>
                <div className="edu">
                    <p className="title">50K Employees!</p>
                    <p className="details">here are lots of details <strong>loser</strong></p>
                </div>
            </div>
            <div className="right-col">
                
            </div>
        </div>
    )
}

export default About;