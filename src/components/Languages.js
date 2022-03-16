import React from 'react';
import { languages } from '../data';

export const Languages = () => {
    return (
        <section className="languages">
            <h3 className="section-title">Languages</h3>
            <hr />
            <ul>
                {languages.map((i) => {
                    const { id, language } = i;
                    return (
                        <li key={id} className="language">
                            {language}
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

export default Languages;