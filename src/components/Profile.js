import React from 'react';
import { profile } from '../data';

export const Profile = () => {
    return (
        <section className="profile">
            <h3 className="section-title">Profile</h3>
            <hr/>
            <p>{profile[0].profile}</p>
        </section>
    );
};

export default Profile;