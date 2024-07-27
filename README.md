# War Combat Game

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Game Mechanics](#game-mechanics)
- [Assets](#assets)
- [Contribution](#contribution)
- [License](#license)

## Introduction

War Combat Game is a React-based combat simulation game where players can choose between different warrior classes and engage in turn-based combat with a randomly selected opponent. Players can increase or decrease their stats, choose their class, and perform various combat actions to defeat their opponents.

## Features

- Choose from multiple warrior classes: Knight, Rogue, Berserker.
- Perform actions like attack, defend, parry, and dodge.
- Dynamic stat adjustments (strength, speed, agility, health).
- Randomized opponent class for varied gameplay.
- Sound effects for immersive combat experience.
- Reset game functionality to restart the battle.

## Installation

1. Clone the repository:
   ```bash
   git clone (https://github.com/SinthMite/warCombat.git)
Navigate to the project directory:

bash
Copy code
cd war-combat-game
Install the dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm start
Usage
Open your browser and navigate to http://localhost:3000.
Select a player class (Knight, Rogue, Berserker) by clicking on the respective image.
Use the stat buttons to increase or decrease your stats.
Perform actions such as Attack, Defend, Parry, or Dodge during your turn.
Observe the game messages to see the outcome of your actions and your opponent's responses.
The game will declare a winner once either the player or the opponent's health drops to zero.
Use the Reset button to start a new game.
Components
App.tsx: Main application component that sets up the context provider and renders the main game components.
Action.tsx: Handles the game's main actions and interactions.
State.tsx: Context provider and custom hook for managing global state (stats and user data).
Stats.tsx: Displays the player's current stats.
WarriorClass.tsx: Defines the various warrior classes (Fighter, Knight, Rogue, Berserker) and their specific properties and methods.
Game Mechanics
Warrior Classes
Fighter:

Base class for all warriors with properties such as strength, speed, agility, and health.
Knight:

Balanced warrior with skills in sword and shield.
Rogue:

Agile and stealthy warrior with high speed and agility.
Berserker:

High-strength warrior with a focus on rage and unyielding attributes.
Actions
Attack: Deals damage based on strength and agility.
Defend: Reduces incoming damage.
Parry: Attempts to deflect an attack and counter with damage.
Dodge: Attempts to evade an attack completely.
Sounds
Different sound effects play for each action (attack, block, parry) to enhance the gameplay experience.
Assets
Images: Character images for Knight, Rogue, and Berserker.
Sounds: Sound effects for various actions (Attack, Block, Parry).
Contribution
Contributions are welcome! Please feel free to submit a Pull Request.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Enjoy the game and happy battling!
