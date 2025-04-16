import React from 'react';
import './Home.css';
import CourseRow from '../components/CourseRow';
import courseData from '../data/courseData';

const Home = () => {
    return (
        <>
            <div className="hero">
                <div className="hero-content">
                    <h1 className="hero-title">Find your next passion</h1>
                    <p className="hero-subtitle">A curated list of New York City’s group classes</p>
                    <div className="search-bar">
                        <input type="text" placeholder="Search classes" className="search-input" />
                        <button className="search-button">Search</button>
                    </div>
                </div>
            </div>
            <div className="home-section-container">
                <div className="home-section">
                    {courseData.map((row) => (
                        <CourseRow key={row.title} title={row.title} courses={row.courses} />
                    ))}
                </div>
                <div className="home-section">
                    <h2 className="section-title">All classes</h2>
                    <div className="all-courses-content">
                        <p>TODO: All Classes</p>
                    </div>
                </div>
                <div className="home-section-container">
                    <div className="faq-content">
                        <p>TODO: FAQ's</p>
                    </div>
                </div>
            </div>
            <div className="bottom-search">
                <p>TODO: Meet new people & learn new things</p>
            </div>
        </>
    );
};

export default Home;
