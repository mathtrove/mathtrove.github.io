import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () =>{
    function rmPopUp(){
        document.querySelector(".menu-pop").classList.remove("active");
    }
    return(
        <nav>
            <header className='nav-title'>
                <img src="../logo.svg" alt="Math Trove logo" />
                <Link to="/">Math Trove</Link>
            </header>
            <div className='nav-link-box'>
                <ul className='nav-links'>
                    <li>
                        <Link className='link' to="/">Home</Link>
                    </li>
                    <li>
                        <Link className='link' to="topics">Topics</Link>
                    </li>
                    <li>
                        <Link className='link' to="about">About</Link>
                    </li>
                    {/* <li>
                        <Link className='link' to="/">Accessibility</Link>
                    </li> */}
                    <li>
                        <Link className='link' to="feedback">Feedback</Link>
                    </li>
                </ul>
                <button className='cta nav-cta'>Get full access</button>
            </div>
            <span className='material-symbols-outlined ctaIcon' onClick={() =>{ document.querySelector(".menu-pop").classList.add("active")}}>menu</span>
            <div className='nav-link-box-mob'>
                <div className='menu-pop'>
                    <span className='material-symbols-outlined ctaIcon' style={{color: 'white', alignSelf: 'end'}} onClick={() =>{document.querySelector(".menu-pop").classList.remove("active")}}>close</span>
                <ul>
                    <li>
                        <Link className='link' onClick={rmPopUp} to="/">Home</Link>
                    </li>
                    <li>
                        <Link className='link' onClick={rmPopUp} to="topics">Topics</Link>
                    </li>
                    <li>
                        <Link className='link' onClick={rmPopUp} to="about">About</Link>
                    </li>
                    <li>
                        <Link className='link' onClick={rmPopUp} to="/">Accessibility</Link>
                    </li>
                    <li>
                        <Link className='link' onClick={rmPopUp} to="feedback">Feedback</Link>
                    </li>
                </ul>
                <button className='cta main-cta'>Get full access</button>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;