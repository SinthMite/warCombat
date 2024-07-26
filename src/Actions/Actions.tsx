import React, { useState, useEffect, Fragment } from 'react';
import { Fighter, Knight, Rogue, Berserker } from '../WarriorClass/WarriorClass';
import { useStateContext } from '../State/State';
import berserker from '../assets/berserker.webp';
import knight from '../assets/knight.webp';
import rogue from '../assets/rogue.webp';
import './Action.css';

const Action: React.FC = () => {
  const { strength, setStrength, speed, setSpeed, agility, setAgility, health, setHealth, user, setUser } = useStateContext();

  const [actionMessage, setActionMessage] = useState<string>('');
  const [opponent, setOpponent] = useState<Fighter | null>(null);
  const [opponentActionMessage, setOpponentActionMessage] = useState<string>('');
  const [winner, setWinner] = useState<string | null>(null);

  useEffect(() => {
    setUser(new Fighter(user.getName(), strength, speed, agility, health));
  }, [strength, speed, agility, health]);

  const checkWinner = () => {
    if (user.getHealth() <= 0 && opponent) {
      setWinner(opponent.getName());
    } else if (opponent && opponent.getHealth() <= 0) {
      setWinner(user.getName());
    }
  };

  const increaseStrength = () => {
    setStrength(prev => prev + 10);
  };

  const increaseSpeed = () => {
    setSpeed(prev => prev + 10);
  };

  const increaseAgility = () => {
    setAgility(prev => prev + 10);
  };

  const increaseHealth = () => {
    setHealth(prev => prev + 10);
  };

  const [userKnight] = useState(new Knight('Isac', 50, 50, 50, 750, 10, 10));
  const [userRogue] = useState(new Rogue('Alexander', 30, 70, 70, 500, 5, 5));
  const [userBerserker] = useState(new Berserker('Rack', 70, 30, 30, 1000, 2, 2));

  const performOpponentAction = (opponent: Fighter) => {
    const actions = ['attack', 'defense', 'parry', 'dodge'];
    const randomAction = actions[Math.floor(Math.random() * actions.length)];
    let message = '';

    switch (randomAction) {
      case 'attack':
        message = opponent.attack(user);
        break;
      case 'defense':
        opponent.defense();
        message = `${opponent.getName()} defends.`;
        break;
      case 'parry':
        message = opponent.parry(user);
        break;
      case 'dodge':
        message = opponent.dodge(user);
        break;
    }

    setOpponentActionMessage(message);
    checkWinner();
  };

  const handleAttack = () => {
    if (opponent && !winner) {
      const message = user.attack(opponent);
      setActionMessage(message);
      checkWinner();
      if (!winner) performOpponentAction(opponent);
    }
  };

  const handleDefend = () => {
    if (!winner) {
      user.defense();
      setActionMessage(`${user.getName()} defends.`);
      checkWinner();
      if (opponent && !winner) performOpponentAction(opponent);
    }
  };

  const handleParry = () => {
    if (opponent && !winner) {
      const message = user.parry(opponent);
      setActionMessage(message);
      checkWinner();
      if (!winner) performOpponentAction(opponent);
    }
  };

  const handleDodge = () => {
    if (opponent && !winner) {
      const message = user.dodge(opponent);
      setActionMessage(message);
      checkWinner();
      if (!winner) performOpponentAction(opponent);
    }
  };

  return (
    <Fragment>
      <section>
        <button onClick={increaseStrength}>Increase 💪</button>
        <button onClick={increaseSpeed}>Increase 🏃‍♂️</button>
        <button onClick={increaseAgility}>Increase 🧗‍♂️</button>
        <button onClick={increaseHealth}>Increase ❤️</button>
      </section>
      <section>
        <button
          onClick={() => {
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
            );
            setOpponent(userKnight);
          }}
        >
          <img src={knight} alt="Knight Card" />
        </button>
        <button
          onClick={() => {
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
            );
            setOpponent(userRogue);
          }}
        >
          <img src={rogue} alt="Rogue Card" />
        </button>
        <button
          onClick={() => {
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
            );
            setOpponent(userBerserker);
          }}
        >
          <img src={berserker} alt="Berserker Card" />
        </button>
      </section>
      <section>
        <button onClick={handleAttack}>Attack</button>
        <button onClick={handleDefend}>Defend</button>
        <button onClick={handleParry}>Parry</button>
        <button onClick={handleDodge}>Dodge</button>
      </section>
      <section>
        <p>{actionMessage}</p>
        <p>{opponentActionMessage}</p>
        <p>User Health: {user.getHealth()}</p>
        {opponent && <p>{opponent.getName()} Health: {opponent.getHealth()}</p>}
        {winner && <p>{winner} wins!</p>}
      </section>
    </Fragment>
  );
};

export default Action;
