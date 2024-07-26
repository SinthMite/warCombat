import React, { Fragment } from "react";
import { useStateContext } from '../State/State';
import { Fighter, Knight, Rogue, Berserker } from '../WarriorClass/WarriorClass';

import './stats.css'
export const Stats: React.FC = () =>{
    const { strength, setStrength, speed, setSpeed, agility, setAgility, health, setHealth, user, setUser } = useStateContext();
    console.log(user)
    return(
    
        <Fragment>
            <ul>
                <li>💪 {user.getStrength()}</li>
                <li>🏃‍♂️ {user.getSpeed()}</li>
                <li>{user.name}</li>
                <li>🧗‍♂️ {user.getAgility()}</li>
                <li>❤️ {user.getHealth()}</li>
            </ul>
        </Fragment>
    )
}