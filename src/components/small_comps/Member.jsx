import React from "react"
import './Member.css'

const Member = ({name,position}) => {
    return(
        <div className="member">
            <img src="https://ik.imagekit.io/abduledits5/my_new_avi.png" alt="founder" />
            <h3>{name}</h3>
            <h4>{position}</h4>
        </div>
    )
}

export default Member;