import React from 'react';
import AboutContent from './AboutContent';
import AboutImg from './AboutImg';
import '../../CssStyle/about.css';


const About = () => {
    return (
        <div className="container">
             <div className="row container-style border"> 
                 <div className='mb-3'>
                 <h3 className="style-h3"> <span className="text-design"> 01. </span> About Me</h3> <hr/>
                 </div>
            <div className="col-md-6">
                <AboutContent></AboutContent>
            </div>
            <div className="col-md-5 ml-5">
                <AboutImg></AboutImg>
            </div>
        </div>
        </div>
       
    );
};

export default About;