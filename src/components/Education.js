import React from 'react';
import { education } from '../data';

export const Education = () => {
    return (
        <section className="education">
            <h3 className="section-title">Education</h3>
            <hr />
            {education.map((i) => {
                const { id, school, degree } = i;
                return (
                    <div key={id}>
                        <p className="school">{school}</p>
                        <p className="degree">{degree}</p>
                    </div>
                );
            })}
        </section>
    );
};

export default Education;