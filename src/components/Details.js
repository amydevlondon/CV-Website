import React from 'react';
import { details } from '../data';

export const Details = () => {
    return (
        <section className="details">
            <div className="gray" />
            <h3 className="section-title">Details</h3>
            <hr />
            {details.map((i) => {
                const { id, title, link, text } = i;
                return (
                    <div key={id} className="detail">
                        <p className="detail-title">{title}</p>
                        <p>
                            <a href={link}>{text}</a>
                        </p>
                    </div>
                );
            })}
        </section>
    );
};

export default Details;