import React from "react";
import './Contact.css';
const Contact = () => {
    return(
        <>
        <section id="contact">
            <div>
                <h1>Join the Waitlist</h1>
                <h3>Be the first to get notified when our Website gets completed.</h3>
            </div>
            <form action=""  method="post" id="frvjne57huhvbuthi86ibjfg">
                <div className="input-box">
                <input className="input-field" type="text" name="name"/><label htmlFor="name">Name</label>
                </div>
                <div className="input-box">
                <input className="input-field" type="email" name="email"/><label htmlFor="email">Email Address</label>
                </div>
                <div className="input-box">
                <input className="input-field" type="text" name="country"/><label htmlFor="country">Country</label>
                </div>
                <div className="input-box">
                <textarea className="input-field" name="suggestion" ></textarea><label htmlFor="suggestion">Suggestions (optional)</label>
                </div>
                <input onClick={(e) => e.preventDefault} type="submit" className="cta" disabled></input>
            </form>
        </section>
        </>
    )
}

export default Contact;