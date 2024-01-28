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
                {footerData.map((footerLinks, i) => {
                    return (
                        <section className='accordin' key={footerLinks.key}>
                    <div className='acc-title'><h1>{footerLinks.title}</h1></div>
                    <div className='acc-links'>
                        <ul>
                            <li>
                                <Link className='link' to={footerLinks.href[0]}>{footerLinks.links[0]}</Link>
                            </li>
                            <li>
                                <Link className='link' to={footerLinks.href[1]}>{footerLinks.links[1]}</Link>
                            </li>
                            <li>
                                <Link className='link' to={footerLinks.href[2]}>{footerLinks.links[2]}</Link>
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
        links: ["About Us","Contact","Feedback"],
        href: ["about","/","/"]
    },
    {
        key: 2,
        title: "Resources",
        links: ["Topics","Support","Our Story"],
        href: ["topics", "/","/"]
    },
    {
        key: 3,
        title: "Updates",
        links: ["What's new?","Updates Timeline","Email Notifications"],
        href: ["/", "/","/"]
    },
    {
        key: 4,
        title: "Social",
        links: ["GitHub","Behance"],
        href: ["https://github.com/mathtrove/mathtrove.github.io", "https://behance.net/abdulraufedits"]
    }
]