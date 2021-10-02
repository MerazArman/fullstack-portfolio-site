import React from 'react';
import '../../CssStyle/mainContent.css'
const MainContent = () => {
    return (
        <div className="main-content">
            <p className="text-design">Hello! I am  <br /> 
            <span className="text-design-span1">Hossain Meraj</span> </p>

            <h4 className="text-design-h4"> Front-End-Developer </h4>
            <p className='text-p'>Web Developer  <span className="text-design-span2">Programmer  </span>   <span className="text-design-span2">Teacher</span></p>
            {/* <div>
                <ul className="text-design-ul">
                    <li>Web Developer</li>
                    <li> Programmer</li>
                    <li>Teacher</li>
                </ul>
            </div> */}
            <p className='text-p'>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at </p>
            <div>
                <button className="btn btn-one">About me</button>
                <button className="btn btn-tow ml-5">Get Resume</button>
            </div>
            
        </div>
    );
};

export default MainContent;