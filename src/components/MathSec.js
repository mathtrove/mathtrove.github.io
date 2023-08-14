import React , { useState } from 'react';

import './MathSec.css';
import Btn from './Btn';
import Loader from './loader';

function MathSec(props) {

    return (
        <section className='box' style={{backgroundColor: props.color}}>
            <h2 className='topic'>{props.topic}</h2>
            <div className='sub-box'>
                <strong>Includes</strong>
                <ul>
                    <li>{props.subTopic0}</li>
                    <li>{props.subTopic1}</li>
                    <li>{props.subTopic2}</li>
                    <li>{props.subTopic3}</li>
                </ul>
                <Btn text="Explore" />
            </div>
            {/* <img className='bg-img' src={props.img}></img> */}
            <Loader/>
        </section>
    )
}

export default MathSec;