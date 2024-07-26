import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Fighter } from '../WarriorClass/WarriorClass';

type StateContextType = {
  strength: number;
  setStrength: React.Dispatch<React.SetStateAction<number>>;
  speed: number;
  setSpeed: React.Dispatch<React.SetStateAction<number>>;
  agility: number;
  setAgility: React.Dispatch<React.SetStateAction<number>>;
  health: number;
  setHealth: React.Dispatch<React.SetStateAction<number>>;
  user: Fighter;
  setUser: React.Dispatch<React.SetStateAction<Fighter>>;
};

const StateContext = createContext<StateContextType | undefined>(undefined);

export const StateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [strength, setStrength] = useState(100);
  const [speed, setSpeed] = useState(100);
  const [agility, setAgility] = useState(100);
  const [health, setHealth] = useState(100);
  const [user, setUser] = useState(new Fighter('user', strength, speed, agility, health));

  return (
    <StateContext.Provider value={{ strength, setStrength, speed, setSpeed, agility, setAgility, health, setHealth, user, setUser }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error('useStateContext must be used within a StateProvider');
  }
  return context;
};
