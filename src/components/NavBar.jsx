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
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">Topics</Link>
                    </li>
                    <li>
                        <Link to="about">About</Link>
                    </li>
                    <li>
                        <Link to="/">Accessibility</Link>
                    </li>
                    <li>
                        <Link to="/">Feedback</Link>
                    </li>
                </ul>
                <button className='cta'>Get full access</button>
            </div>
            <div className='nav-link-box-mob'>
                <span className='material-symbols-outlined ctaIcon' onClick={() =>{ document.querySelector(".menu-pop").classList.add("active")}}>menu</span>
                <div className='menu-pop'>
                    <span className='material-symbols-outlined ctaIcon' style={{color: 'white', alignSelf: 'end'}} onClick={() =>{document.querySelector(".menu-pop").classList.remove("active")}}>close</span>
                <ul>
                    <li>
                        <Link onClick={rmPopUp} to="/">Home</Link>
                    </li>
                    <li>
                        <Link onClick={rmPopUp} to="/">Topics</Link>
                    </li>
                    <li>
                        <Link onClick={rmPopUp} to="about">About</Link>
                    </li>
                    <li>
                        <Link onClick={rmPopUp} to="/">Accessibility</Link>
                    </li>
                    <li>
                        <Link onClick={rmPopUp} to="/">Feedback</Link>
                    </li>
                </ul>
                <button className='cta'>Get full access</button>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;