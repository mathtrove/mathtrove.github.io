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
            <form onSubmit={e => e.preventDefault}  method="post" id="frvjne57huhvbuthi86ibjfg">
                <div className="input-box">
                <input className="input-field " id="name" type="text" name="name" /><label htmlFor="name">Name</label>
                </div>
                <div className="input-box">
                <input className="input-field" id="email" type="email" name="email"/><label htmlFor="email">Email Address</label>
                </div>
                <div className="input-box">
                <input className="input-field" id="country" type="text" name="country"/><label htmlFor="country">Country</label>
                </div>
                <div className="input-box">
                <textarea className="input-field" id="suggestion" name="suggestion"></textarea><label htmlFor="suggestion">Suggestions (optional)</label>
                </div>
                <input type="submit" className="cta" ></input>
            </form>
        </section>
        </>
    )
}

export default Contact;