import React from 'react';
import { softSkills } from '../data';

export const SoftSkills = () => {
    return (
        <section className="soft-skills">
            <h3 className="section-title">Key Skills</h3>
            <hr />
            <ul>
                {softSkills.map((i) => {
                    const { id, text } = i;
                    return (
                        <li key={id} className="soft-skill">
                            {text}
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

export default SoftSkills;