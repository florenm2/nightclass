import React from 'react';
import './Home.css';
import ClassRow from '../components/ClassRow';
import classData from '../data/classData';

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
            <div className="class-section">
                {classData.map((row) => (
                    <ClassRow key={row.title} title={row.title} classes={row.classes} />
                ))}
            </div>
        </>
    );
};

export default Home;
