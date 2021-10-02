import React from 'react';
import '../../CssStyle/social.css'
import {AiOutlineGithub, AiFillLinkedin, AiFillFacebook, AiFillSkype } from 'react-icons/ai';


const Social = () => {
    return (
        <div className='text-white social-design'>
             <p className="follow">FOLLOWING ME</p>
            <ul>
                <li> <AiOutlineGithub></AiOutlineGithub> </li>
                <li> <AiFillLinkedin></AiFillLinkedin> </li>
                <li> <AiFillSkype></AiFillSkype> </li>
                <li><AiFillFacebook></AiFillFacebook> </li>
            </ul>
        </div>
    );
};

export default Social;