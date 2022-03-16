import React from 'react';
import { links } from '../data';
import CV from '../CV/cv.pdf';

export const Links = () => {
    return (
        <section className="links">
            <h3 className="section-title">Links</h3>
            <hr />
            <ul>
                <li className="link">
                    <a href={CV} download>Download CV</a>
                </li>
                {links.map((i) => {
                    const { id, text, link } = i;
                    return (
                        <li key={id} className="link">
                            <a href={link} target="_blank" rel="noopener noreferrer">{text}</a>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

export default Links;

