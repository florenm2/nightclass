import React from 'react';
import './ClassCard.css';

interface ClassCardProps {
    image: string;
    date: string;
    title: string;
    price: string;
    tags: string[];
}

const ClassCard: React.FC<ClassCardProps> = ({ image, date, title, price, tags }) => {
    return (
        <div className="class-card">
            <div className="class-card-image" style={{ backgroundImage: `url(${image})` }}>
                <span className="class-card-date">{date}</span>
            </div>
            <div className="class-card-info">
                <h3 className="class-card-title">{title}</h3>
                <p className="class-card-price">{price}</p>
                <div className="class-card-tags">
                    {tags.map((tag, index) => (
                        <span key={index} className="class-card-tag">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ClassCard;