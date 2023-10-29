import React from 'react';
import './About.css'
import about from '../Assets/images/About/about.png'

const About = () => {
    return (
        <div className='about'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-5'>
                        <h4>Vision</h4>
                        <p>Our missinon and vision is to provide good quality and healthy food for all.</p>
                    </div>
                    <div className='col-md-5 img-section d-flex justify-content-center'>
                        <img className='about-img' src={about} alt="" />
                    </div>

                </div>

            </div>
            
        </div>
    );
};

export default About;