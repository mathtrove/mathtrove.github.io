import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () =>{
    return(
        <footer id='footer'>
            <aside className='footer-left'>
                <img src="../logo.svg" alt="logo on footer" />
                <strong>© 2023 Abdul Rauf. <br></br>All Rights Reserved.</strong>
            </aside>
            <main className='footer-right'>
                <section className='accordin'>
                    <div className='acc-title'><h1>Company</h1><span className="material-symbols-outlined">add</span></div>
                    <div className='acc-links'>
                        <ul>
                            <li>
                                <Link to="about">About us</Link>
                            </li>
                            <li>
                                <Link to="/">Support</Link>
                            </li>
                            <li>
                                <Link to="/">Contact</Link>
                            </li>
                            <li>
                                <Link to="/">Feedback</Link>
                            </li>
                        </ul>
                    </div>
                </section>
            </main>
        </footer>
    )
}

export default Footer;