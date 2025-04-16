import React from 'react';
import './CourseCard.css';

interface CourseItem {
    id: number;
    image: string;
    date: string;
    title: string;
    duration: string;
    location: string;
    pricePerClass: string;
    totalPrice: string;
}

interface CourseCardProps {
    courseItem: CourseItem;
}

const CourseCard: React.FC<CourseCardProps> = ({ courseItem }) => {
    const { image, date, title, duration, location, pricePerClass, totalPrice } = courseItem;

    return (
        <div className="course-card">
            <div className="course-card-image" style={{ backgroundImage: `url(${image})` }}>
                <span className="course-card-date">{date}</span>
            </div>
            <div className="course-card-info">
                <h3 className="course-card-title">{title}</h3>
                <p className="course-card-duration-location">{duration} • {location}</p>
                <p className="course-card-price">{pricePerClass} per class • {totalPrice} total</p>
            </div>
        </div>
    );
};

export default CourseCard;