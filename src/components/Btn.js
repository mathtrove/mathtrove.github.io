import React from 'react';

import './Btn.css';

function Btn(props){
    var text = props.text;
    return(
        <button >{text}</button>
    )
}

export default Btn;