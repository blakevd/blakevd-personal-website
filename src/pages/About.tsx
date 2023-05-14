import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className = "page-overlay about">
            <div className="left-col">
                <h1>Educational Background</h1>
                <p className="subhead">this is a paragraph tag</p>
                
                <div className="news">
                    <p className="employees">50K Employees!</p>
                    <p className="details">here are lots of details <strong>loser</strong></p>
                </div>
            </div>
            <div className="right-col">
                <div className="card card1">
                    <div className="card-details">
                        <div>
                            <a href="#" className="product-title">Sports</a>
                            <p>Running Shoes</p>
                        </div>
                        <p className="product-price">$8888</p>
                    </div>
                </div>

                <div className="card card2">
                    <div className="card-details">
                        <div>
                            <a href="#" className="product-title">Sports</a>
                            <p>Running Shoes</p>
                        </div>
                        <p className="product-price">$8888</p>
                    </div>
                </div>

                <div className="card card3">
                    <div className="card-details">
                        <div>
                            <a href="#" className="product-title">Sports</a>
                            <p>Running Shoes</p>
                        </div>
                        <p className="product-price">$8888</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;