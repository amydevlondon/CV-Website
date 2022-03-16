import React from 'react';
import { techSkills } from '../data';

export const TechSkills = () => {
    return (
        <section className="tech-skills">
            <h3 className="section-title">Technical Skills</h3>
            <hr />
            <div>
                {techSkills.map((i) => {
                    const { id, title, text } = i;
                    return (
                        <div key={id} className="tech-skill">
                            <p className="tech-title">{title}</p>
                            <p className="tech-text">{text}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default TechSkills;