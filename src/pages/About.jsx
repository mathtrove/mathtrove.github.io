import React from 'react'
import './About.css';
import Member from '../components/small_comps/Member'
// import ReactDOM from 'react-dom/client'
import abtImg from '../assets/abtimg.svg';
const About = () =>{
    return(
        <>
        <section id='abt'>
            <div className="abt-left">
                <h1 className='main-h1'>About Math Trove</h1>
                <p>Our mission is to make the access of all mathematical formulas available to everyone at everytime.</p>
            </div>
            <div className="abt-right">
                <img src={abtImg} alt="teacher and pi and softboard" />
            </div>
        </section>
        <section id="team">
            <h1>Our Team</h1>
            <div className="team-infos">
                <Member name="Abdul Rauf" position="Founder"/>
            </div>
        </section>
        <section id="wrp">
            <strong>We’re proud of our mission and are willing to grow more in the future.</strong>
            <p>If you have comments about the site or ideas about partnership opportunities, please <span><a href="/" className='link' target='_blank'>email us.</a></span></p>
        </section>
        </>
    )
}

export default About;