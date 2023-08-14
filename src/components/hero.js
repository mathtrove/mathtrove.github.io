import React from "react";

import './hero.css';

function Hero() {
    return (
        <header className='hero'>
            <nav>
                <a>a</a>
                <a>c</a>
                <a>b</a>
            </nav>
            <h1 className='main-h1'>Maths Formulas</h1>
            <p className='pitch'>An open source collection of more than 1 million mathematical formulas.</p>
        </header>
    )
}

export default Hero;