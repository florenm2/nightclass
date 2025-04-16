import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-left">
                    <div className="footer-logo">Nightclass</div>
                    <p className="footer-tagline">Meet new people. Learn new things</p>
                    <p className="footer-copyright">Copyright Nightclass Inc. 2025</p>
                </div>
                <div className="footer-links">
                    <h3 className="footer-section-title">Classes</h3>
                    <ul className="footer-class-list">
                        <li>Pottery</li>
                        <li>Music</li>
                        <li>Cooking</li>
                        <li>Sketch Writing</li>
                        <li>Improv</li>
                        <li>Writing</li>
                        <li>Standup</li>
                        <li>Woodworking</li>
                        <li>Filmmaking</li>
                        <li>Knitting</li>
                        <li>Fitness</li>
                        <li>Dance</li>
                        <li>Language</li>
                    </ul>
                </div>
                <div className="footer-company">
                    <h3 className="footer-section-title">Company</h3>
                    <ul className="footer-company-list">
                        <li><a href="/teach">Teach</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/careers">Careers</a></li>
                        <li><a href="/terms">Terms</a></li>
                        <li><a href="/privacy">Privacy Policy</a></li>
                    </ul>
                </div>
                <div className="footer-social">
                    <h3 className="footer-section-title">Social</h3>
                    <ul className="footer-social-list">
                        <li><a href="https://instagram.com">Instagram</a></li>
                        <li><a href="https://twitter.com">Twitter</a></li>
                        <li><a href="https://tiktok.com">TikTok</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;