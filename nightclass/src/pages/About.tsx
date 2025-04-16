import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about">
            {/* Hero Section */}
            <div className="about-hero">
                <div className="about-hero-content">
                    <h1 className="about-hero-title">Classes bring people together</h1>
                </div>
            </div>

            {/* Story Section */}
            <div className="about-story">
                <h2 className="about-story-title">Our story</h2>
                <p className="about-story-text">
                    Will and Ankur, two friends from college, decided to take evening classes in different cities.
                    It turned out to be an awesome way to step out of their comfort zones and meet cool people.
                </p>
                <p className="about-story-text">
                    They wanted to take more, but they were tough to find – Google searches, clicking 50 links, navigating websites that haven’t been updated since 2011.
                </p>
                <p className="about-story-text">
                    Such a rewarding experience needed to be easy to find and book. That’s Nightclass.
                </p>
            </div>

            {/* The Team Section */}
            <div className="about-team">
                <h2 className="about-team-title">The Team</h2>
                <div className="about-team-members">
                    <div className="team-member">
                        <h3 className="team-member-name">Will Berger</h3>
                        <p className="team-member-role">Design</p>
                    </div>
                    <div className="team-member">
                        <h3 className="team-member-name">Ankur Lal</h3>
                        <p className="team-member-role">Product</p>
                    </div>
                </div>
            </div>

            {/* Join the Team Section */}
            <div className="about-join">
                <h2 className="about-join-title">Join the Team</h2>
                <div className="join-form-placeholder">Form</div>
            </div>
        </div>
    );
};

export default About;