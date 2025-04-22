import React from 'react';
import './AllCourses.css';

const courses = [
    'Pottery',
    'Improv',
    'Cooking',
    'Crafts',
    'Painting',
    // 'Fitness',
    'Tech',
    'Standup',
    'Language',
    'Business',
];

const AllCourses: React.FC = () => {
    return (
        <div className="all-courses-container">
            {courses.map((course, index) => (
                <div key={index} className="all-courses-card">
                    {course}
                </div>
            ))}
        </div>
    );
};

export default AllCourses;