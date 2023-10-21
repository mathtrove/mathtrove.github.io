import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Footer.css';

const Footer = () =>{

    const [selected, setSelected] = useState(null);

    const footerToggle = (i) => {
        if(selected === i){
            return setSelected(null);
        }
        setSelected(i)
    }
    return(
        <footer id='footer'>
            <aside className='footer-left'>
                <img src="../logo.svg" alt="logo on footer" />
                <strong>© 2023 Abdul Rauf. <br></br>All Rights Reserved.</strong>
            </aside>
            <main className='footer-right'>
                {footerData.map((footerLinks, i) => {
                    return (
                        <section className='accordin' key={footerLinks.key}>
                    <div className='acc-title' onClick={()=> footerToggle(i)}><h1>{footerLinks.title}</h1><span className={selected === i ? "material-symbols-outlined acc-icon active" : "material-symbols-outlined acc-icon"}>add</span></div>
                    <div className={selected === i ? 'acc-links active' : 'acc-links'}>
                        <ul>
                            <li>
                                <Link to="about">{footerLinks.links[0]}</Link>
                            </li>
                            <li>
                                <Link to="/">{footerLinks.links[1]}</Link>
                            </li>
                            <li>
                                <Link to="/">{footerLinks.links[2]}</Link>
                            </li>
                            <li>
                                <Link to="/">{footerLinks.links[3]}</Link>
                            </li>
                        </ul>
                    </div>
                </section>
                    )
                })}
                
            </main>
        </footer>
    )
}

export default Footer;

const footerData = [
    {
        key: 1,
        title: "Company",
        links: ["About Us","Support","Contact","Feedback"]
    },
    {
        key: 2,
        title: "Resources",
        links: ["Topics","Categories","Download"]
    },
    {
        key: 3,
        title: "Updates",
        links: ["What's new?","Updates Timeline","Email Notifications"]
    },
    {
        key: 4,
        title: "Social",
        links: ["GitHub","Behance"]
    }
]