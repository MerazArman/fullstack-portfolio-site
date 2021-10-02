import React from 'react';
import SkillsList from './SkillsList';


const skills = [
    {
        skill:"HTML",
        percents:50
    },
    {
        skill:"CSS",
        percents:50
    },
    {
        skill:"Bootstrap",
        percents:50
    },
    {
        skill:"Javascript",
        percents:50
    },
    {
        skill:"React",
        percents:50
    },
    {
        skill:"MongoDB",
        percents:50
    },
    {
        skill:"Node js",
        percents:50
    },
    {
        skill:"Express js",
        percents:50
    },
    {
        skill:"Firebase",
        percents:50
    }
]


const MySkills = () => {
    return (
        <div className="container skill-container-style">

            
            <div className="row ">
              
                {
                skills.map((skillList) => <SkillsList skillList={skillList} ></SkillsList>)
            }

               
            </div>
           
        </div>
    );
};

export default MySkills;