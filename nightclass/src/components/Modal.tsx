import React from 'react';
import './Modal.css';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    subtitle?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, subtitle }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2 className="modal-title">{title}</h2>
                    {subtitle && <p className="modal-subtitle">{subtitle}</p>}
                </div>
                <div className="modal-buttons">
                    <div className="modal-button-group">
                        <button className="modal-button google-button">Continue with Google</button>
                        <button className="modal-button apple-button">Continue with Apple</button>
                    </div>
                    <div className="modal-divider"></div>
                    <button className="modal-button email-button">Use email</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;