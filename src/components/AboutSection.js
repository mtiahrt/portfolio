import React from 'react';
import home1 from '../img/home1.png';

function AboutSection(props) {
    return (
        <div>
            <div className="description">
                <div className="title">
                    <div className="hide">
                        <h2>We work to make</h2>
                    </div>
                    <div className="hide">
                        <h2>your <span>dreams</span> come</h2>
                    </div>
                    <div className="hide">
                        <h2>true.</h2>
                    </div>
                </div>
                <p>Contact us for any coding and styles stuff you that have.  I am a professional developer with amazing skills.</p>
                <button>Contact Me</button>
            </div>
            <div className="image">
                <img src={home1} alt="a guy in a picture"/>
            </div>
        </div>
    )
}



export default AboutSection

