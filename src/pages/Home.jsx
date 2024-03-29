import React from 'react'
import './Home.css';
import Bibliophile from '../assets/Bibliophile.svg';
import { Link } from 'react-router-dom';
// import ReactDOM from 'react-dom/client'
const Home = () =>{
    return(
        <>
            <section id='hero'>
                <div className='hero-left'>
                    <h1>Mathematical formulas for everyone</h1>
                    <p>Math Trove is a huge math library which contains from basic to advanced mathematical formulas.</p>
                    {/* <input type="text" className='search-bar' placeholder='Search any topic / formula'/> */}
                    <Link to='frvjne57huhvbuthi86ibjfg'><button className='cta main-cta waitlist-cta'>Join the waitlist<span className='material-symbols-outlined'>arrow_forward</span></button></Link>
                </div>
                <div className='hero-right'>
                    <img src="https://ik.imagekit.io/abduledits5/mathtrove/shapes.png?updatedAt=1700224297545" alt="book shelf image" />
                </div>
                <div className='hero-quote'>
                    <div className='quote-title'>
                        <blockquote>“Quote of the day”</blockquote>
                    </div>
                    <div className='quote-content'>
                        <blockquote>“Quote of the day”<br/><span>-Anonymous</span></blockquote>
                    </div>
                </div>
            </section>
            <section id='wpfo'>
                <h2>We provide formulas of</h2>
                <div className='topic-boxes'>
                    <div className="home-topic-box">Trigonometry</div>
                    <div className="home-topic-box">Algebra</div>
                    <div className="home-topic-box">Calculus</div>
                    <div className="home-topic-box">Logarithms</div>
                    <Link to='topics'><button className='cta main-cta'>and more <span className="material-symbols-outlined">arrow_forward</span></button></Link>
                </div>
            </section>
            <section id='home-f1'>
                <div className="home-f1-left">
                    <h1>Now finding the formula has become simple.</h1>
                    <p>In Math Trove, you can easily find any formula you need at any time.</p>
                </div>
                <div className="home-f1-right">
                    <img src={Bibliophile} alt="person holding books" />
                </div>
            </section>
            <section id="hero-end">
                <strong>Can't find that formula? No need to worry from now on!</strong>
                <Link to='frvjne57huhvbuthi86ibjfg'><button className='cta main-cta waitlist-cta'>Join the waitlist<span className='material-symbols-outlined'>arrow_forward</span></button></Link>
            </section>
        </>
    )
}

export default Home;