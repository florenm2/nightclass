import React from 'react';
import './ClassRow.css';
import ClassCard from './ClassCard';

interface ClassRowProps {
    title: string;
    classes: Array<{
        id: number;
        image: string;
        date: string;
        title: string;
        price: string;
        tags: string[];
    }>;
}

const ClassRow: React.FC<ClassRowProps> = ({ title, classes }) => {
    return (
        <div className="class-row">
            <h2 className="class-row-title">{title}</h2>
            <div className="class-row-cards">
                {classes.map((classItem) => (
                    <ClassCard key={classItem.id} {...classItem} />
                ))}
            </div>
        </div>
    );
};

export default ClassRow;