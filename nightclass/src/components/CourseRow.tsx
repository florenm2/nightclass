import React from 'react';
import './CourseRow.css';
import CourseCard from './CourseCard';

interface CourseRowProps {
    title: string;
    courses: Array<{
        id: number;
        image: string;
        date: string;
        title: string;
        duration: string;
        location: string;
        pricePerClass: string;
        totalPrice: string;
    }>;
}

const CourseRow: React.FC<CourseRowProps> = ({ title, courses }) => {
    return (
        <div className="course-row">
            <h2 className="course-row-title">{title}</h2>
            <div className="course-row-cards">
                {courses.map((courseItem) => (
                    <CourseCard key={courseItem.id} courseItem={courseItem} />
                ))}
            </div>
        </div>
    );
};

export default CourseRow;