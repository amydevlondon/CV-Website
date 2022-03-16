import React from 'react';
import { experience } from '../data';

export const Experience = () => {
    return (
        <section className="experience">
            <h3 className="section-title">Experience</h3>
            <hr />
            {experience.map((i) => {
                const { id, job, company, city, start, finish, details } = i;
                return (
                    <div key={id} className="job">
                        <div className="flex">
                            <p className="job-title">{job}</p>
                            <p className="job-company">{company}</p>
                        </div>
                        <p className="job-city">{city}</p>
                        <p className="job-dates">{start} –– {finish}</p>
                        <ul>
                            {details.map((j) => {
                                return (
                                    <li className="job-details">{j}</li>
                                );
                            })}
                        </ul>
                    </div>
                );
            })}
        </section>
    );
};

export default Experience;