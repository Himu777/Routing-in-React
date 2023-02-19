import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from "./Header"

const About = () => {
    const navigate = useNavigate();

const goToContact =() =>{
    navigate("/contact");
};

    
return (
        <>
        <Header />
        <div>
            <h1>About</h1>
            <button onClick={() => goToContact()}>Go to Contact Page</button>
        </div>
        </>
)
}
export default About;