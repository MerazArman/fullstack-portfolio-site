import React from 'react';
import '../../CssStyle/mySkills.css'


const SkillsList = ({skillList}) => {
    console.log(skillList);
    return (
        <div className=" skills-container col-md-3">
            <div className="card mb-4">
                <div className="box">
                    <div className="percent">
                        <svg className="svg">
                            <circle cx="70" cy="70" r="70"></circle>
                            <circle cx="70" cy="70" r="70"></circle>
                        </svg>
                        <div className="num">
                            <h2>{skillList.percents} <span>%</span></h2>
                        </div>
                    </div>
                    <h2 className="text">{skillList.skill} </h2>
                </div>
            </div>
        </div>
    );
};

export default SkillsList;