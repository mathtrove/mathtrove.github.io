import React from "react"
import './Member.css'

const Member = ({name,position}) => {
    return(
        <div className="member">
            <img src="https://ik.imagekit.io/abduledits5/new_avi.jpg" alt="founder" />
            <h3>{name}</h3>
            <h4>{position}</h4>
        </div>
    )
}

export default Member;