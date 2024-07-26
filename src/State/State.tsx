import React, { createContext, useContext, useState, ReactNode } from 'react';

type StateContextType = {
  strength: number;
  setStrength: React.Dispatch<React.SetStateAction<number>>;
  speed: number;
  setSpeed: React.Dispatch<React.SetStateAction<number>>;
  agility: number;
  setAgility: React.Dispatch<React.SetStateAction<number>>;
  health: number;
  setHealth: React.Dispatch<React.SetStateAction<number>>;
};

const StateContext = createContext<StateContextType | undefined>(undefined);

export const StateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [strength, setStrength] = useState(100);
  const [speed, setSpeed] = useState(100);
  const [agility, setAgility] = useState(100);
  const [health, setHealth] = useState(100);

  return (
    <StateContext.Provider value={{ strength, setStrength, speed, setSpeed, agility, setAgility, health, setHealth }}>
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
