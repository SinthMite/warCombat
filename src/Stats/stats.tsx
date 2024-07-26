import React, { Fragment } from "react";
import { useStateContext } from '../State/State';
import './stats.css'
export const Stats: React.FC = () =>{
    const { strength, setStrength, speed, setSpeed, agility, setAgility, health, setHealth, user, setUser } = useStateContext();
    console.log(user)
    return(
    
        <Fragment>
            <ul>
                <li>💪 {strength}</li>
                <li>🏃‍♂️ {speed}</li>
                <li>{user.name}</li>
                <li>🧗‍♂️ {agility}</li>
                <li>❤️ {health}</li>
            </ul>
        </Fragment>
    )
}