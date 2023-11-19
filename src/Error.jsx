import { Link } from "react-router-dom";

const Error = () =>{
    return (
        <>
        <article style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
            textAlign: "center",
        }}>
            <h1>Oh hey! This page is under development 🚧</h1>
            {/* <p>Till the page finishes, let's play a math game.</p> */}
            <div style={{display: "flex", gap: "1rem",}}>
                {/* <button className="ctaStrkd">Play game</button> */}
                <button className="cta main-cta"><Link rel="stylesheet" href="../" >Back to homepage</Link></button>
            </div>
            
        </article>
        </>
    )
}

export default Error;