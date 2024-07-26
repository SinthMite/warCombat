import React, { useState, useEffect } from 'react';
import { Fighter, Knight, Rogue, Berserker } from '../WarriorClass/WarriorClass';
import { useStateContext } from '../State/State';

const Action: React.FC = () => {
  const { strength, setStrength, speed, setSpeed, agility, setAgility, health, setHealth } = useStateContext();

  const [user, setUser] = useState(new Fighter('user', strength, speed, agility, health));

  useEffect(() => {
    // Update the user stats whenever they change
    setUser(new Fighter(user.getName(), strength, speed, agility, health));
    console.log(user);
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
    <div>
      <button onClick={IncreaseStrength}>Increase Strength</button>
      <button onClick={IncreaseSpeed}>Increase Speed</button>
      <button onClick={IncreaseAgility}>Increase Agility</button>
      <button onClick={IncreaseHealth}>Increase Health</button>
      <button
        onClick={() =>
          setUser(
            new Knight(
              'IsacTheKnight',
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
        Knight
      </button>
      <button
        onClick={() =>
          setUser(
            new Rogue(
              'AlexanderTheRogue',
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
        Rogue
      </button>
      <button
        onClick={() =>
          setUser(
            new Berserker(
              'RackTheBerserker',
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
        Berserker
      </button>
    </div>
  );
};

export default Action;
