import React, { Fragment } from "react";
import { useStateContext } from '../State/State';

import './stats.css'
export const Stats: React.FC = () =>{
    const {  user } = useStateContext();
    console.log(user)
    return(
    
        <Fragment>
            <ul>
                <li>💪 {user.getStrength()}</li>
                <li>🏃‍♂️ {user.getSpeed()}</li>
                <li>{user.name.toUpperCase()}</li>
                <li>🧗‍♂️ {user.getAgility()}</li>
                <li>❤️ {user.getHealth()}</li>
            </ul>
        </Fragment>
    )
}