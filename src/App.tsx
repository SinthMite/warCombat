import React from 'react';
import { StateProvider } from './State/State';
import Action from "./Actions/Actions.tsx";
import {Stats} from "./Stats/stats.tsx";

const App: React.FC = () => {
  return (
    <StateProvider>
      <div>
        <Stats />
        <h1>Combat Sports</h1>
        <Action />
      </div>
    </StateProvider>
  );
};

export default App;
