import React, { useState, useEffect, Fragment } from 'react';
import { Fighter, Knight, Rogue, Berserker } from '../WarriorClass/WarriorClass';
import { useStateContext } from '../State/State';
import berserker from '../assets/berserker.webp';
import knight from '../assets/knight.webp';
import rogue from '../assets/rogue.webp';
import './Action.css'
const Action: React.FC = () => {
  const { strength, setStrength, speed, setSpeed, agility, setAgility, health, setHealth, user, setUser } = useStateContext();


  useEffect(() => {
    // Update the user stats whenever they change
    setUser(new Fighter(user.getName(), strength, speed, agility, health));
  }, [strength, speed, agility, health]);

  const IncreaseStrength = () => {
    setStrength(prev => prev + 10);
  };

  const IncreaseSpeed = () => {
    setSpeed(prev => prev + 10);
  };

  const IncreaseAgility = () => {
    setAgility(prev => prev + 10);
  };

  const IncreaseHealth = () => {
    setHealth(prev => prev + 10);
  };

  const [userKnight] = useState(new Knight('Isac', 150, 40, 20, 600, 10, 10));
  const [userRogue] = useState(new Rogue('Alexander', 100, 30, 30, 700, 5, 5));
  const [userBerserker] = useState(new Berserker('Rack', 200, 10, 20, 500, 2, 2));

  return (
    <Fragment>
        <section>
      <button onClick={IncreaseStrength}>Increase 💪</button>
      <button onClick={IncreaseSpeed}>Increase 🏃‍♂️</button>
      <button onClick={IncreaseAgility}>Increase 🧗‍♂️</button>
      <button onClick={IncreaseHealth}>Increase ❤️</button>
      </section>
      <section>
      <button
        onClick={() =>
          setUser(
            new Knight(
              'Knight',
              userKnight.getStrength(),
              userKnight.getSpeed(),
              userKnight.getAgility(),
              userKnight.getHealth(),
              userKnight.getSwordSkill(),
              userKnight.getShieldSkill()
            )
          )
        }
      >
        <img src={knight} alt="knight Card" />
      </button>
      <button
        onClick={() =>
          setUser(
            new Rogue(
              'Rogue',
              userRogue.getStrength(),
              userRogue.getSpeed(),
              userRogue.getAgility(),
              userRogue.getHealth(),
              userRogue.getStealth(),
              userRogue.getBackstabbing()
            )
          )
        }
      >
        <img src={rogue} alt="knight Card" />
      </button>
      <button
        onClick={() =>
          setUser(
            new Berserker(
              'Berserker',
              userBerserker.getStrength(),
              userBerserker.getSpeed(),
              userBerserker.getAgility(),
              userBerserker.getHealth(),
              userBerserker.getRage(),
              userBerserker.getUnyielding()
            )
          )
        }
      >
        <img src={berserker} alt="knight Card" />
      </button>
      </section>
    </Fragment>
  );
};

export default Action;
