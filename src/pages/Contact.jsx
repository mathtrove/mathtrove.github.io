import React, {useState} from "react";
import './Contact.css';
const Contact = () => {

    const [nameInput, setNameInput] = useState("");
    const [emailInput, setEmailInput] = useState("");
    const [countryInput, setCountryInput] = useState("");
    const [msgInput, setMsgInput] = useState("");

    const submitForm = (e)=>{
        e.preventDefault();
        setNameInput("");
        setEmailInput("");
        setCountryInput("");
        setMsgInput("");
    }

    const changeName = (e)=>{
        setNameInput(e.target.value);
    }
    const changeEmail = (e)=>{
        setEmailInput(e.target.value);
    }
    const changeCountry = (e)=>{
        setCountryInput(e.target.value);
    }
    const changeMsg = (e)=>{
        setMsgInput(e.target.value);
    }


    return(
        <>
        <section id="contact">
            <div>
                <h1>Join the Waitlist</h1>
                <h3>Be the first to get notified when our Website gets completed.</h3>
            </div>
            <form onSubmit={submitForm}  method="post" id="frvjne57huhvbuthi86ibjfg">
                <div className="input-box">
                <input className="input-field " id="name" type="text" name="name" value={nameInput} onChange={changeName} /><label htmlFor="name">Name</label>
                </div>
                <div className="input-box">
                <input className="input-field" id="email" type="email" name="email" value={emailInput} onChange={changeEmail}/><label htmlFor="email">Email Address</label>
                </div>
                <div className="input-box">
                <input className="input-field" id="country" type="text" name="country" value={countryInput} onChange={changeCountry}/><label htmlFor="country">Country</label>
                </div>
                <div className="input-box">
                <textarea className="input-field" id="suggestion" name="suggestion" value={msgInput} onChange={changeMsg}></textarea><label htmlFor="suggestion">Suggestions (optional)</label>
                </div>
                <input type="submit" className="cta" ></input>
            </form>
        </section>
        </>
    )
}

export default Contact;