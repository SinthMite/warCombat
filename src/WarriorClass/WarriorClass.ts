export class Fighter {
    name: string;
    initialStrength: number;
    initialSpeed: number;
    initialAgility: number;
    initialHealth: number;
    strength: number;
    speed: number;
    agility: number;
    health: number;

    constructor(name: string, strength: number, speed: number, agility: number, health: number) {
        this.name = name;
        this.initialStrength = strength;
        this.initialSpeed = speed;
        this.initialAgility = agility;
        this.initialHealth = health;
        this.strength = strength;
        this.speed = speed;
        this.agility = agility;
        this.health = health;
    }

    getName(): string {
        return this.name;
    }

    setName(newName: string): void {
        this.name = newName;
    }

    getStrength(): number {
        return this.strength;
    }

    setStrength(newStrength: number): void {
        this.strength = newStrength;
    }

    getSpeed(): number {
        return this.speed;
    }

    setSpeed(newSpeed: number): void {
        this.speed = newSpeed;
    }

    getAgility(): number {
        return this.agility;
    }

    setAgility(newAgility: number): void {
        this.agility = newAgility;
    }

    getHealth(): number {
        return this.health;
    }

    setHealth(newHealth: number): void {
        this.health = newHealth;
    }

    calculateAttackDamage(): number {
        return Math.floor(Math.random() * (this.strength + this.agility));
    }

    attack(opponent: Fighter): string {
        const damage = this.calculateAttackDamage();
        opponent.health -= damage;
        return `${this.name} attacks ${opponent.getName()} and deals ${damage} damage`;
    }

    defense(): void {
        const reducedDamage = this.health - this.agility + this.strength / 2;
        this.setHealth(reducedDamage);
    }

    dodge(opponent: Fighter): string {
        const dodgePercentage = Math.floor(Math.random() * (this.agility + this.speed / 2));
        const hitPercentage = Math.floor(Math.random() * (opponent.agility + opponent.speed / 2));
        
        if (dodgePercentage > hitPercentage) {
            return `${this.name} dodges the attack`;
        } else {
            // The opponent successfully attacks if the dodge fails
            const damage = opponent.calculateAttackDamage();
            this.health -= damage;
            return `${opponent.getName()} attacks ${this.name} and deals ${damage} damage`;
        }
    }

    parry(opponent: Fighter): string {
        const myAttack = this.calculateAttackDamage();
        const opponentAttack = opponent.calculateAttackDamage();

        if (opponentAttack > myAttack) {
            this.health -= (opponentAttack - myAttack);
            return `${this.name} parries but still takes ${opponentAttack - myAttack} damage`;
        } else if (opponentAttack < myAttack) {
            opponent.health -= (myAttack - opponentAttack);
            return `${this.name} parries and deals ${myAttack - opponentAttack} damage to ${opponent.getName()}`;
        } else {
            return `${this.name} and ${opponent.getName()} parry each other's attacks with no damage`;
        }
    }

    reset(): void {
        this.strength = this.initialStrength;
        this.speed = this.initialSpeed;
        this.agility = this.initialAgility;
        this.health = this.initialHealth;
    }
}

export class Knight extends Fighter {
    swordSkill: number;
    shieldSkill: number;

    constructor() {
        super('Knight', 50, 50, 50, 750);
        this.swordSkill = 10;
        this.shieldSkill = 10;
    }

    getSwordSkill(): number {
        return this.swordSkill;
    }

    setSwordSkill(newSwordSkill: number): void {
        this.swordSkill = newSwordSkill;
    }

    getShieldSkill(): number {
        return this.shieldSkill;
    }

    setShieldSkill(newShieldSkill: number): void {
        this.shieldSkill = newShieldSkill;
    }
}

export class Rogue extends Fighter {
    stealth: number;
    backstabbing: number;

    constructor() {
        super('Rogue', 30, 70, 70, 500);
        this.stealth = 5;
        this.backstabbing = 5;
    }

    getStealth(): number {
        return this.stealth;
    }

    setStealth(newStealth: number): void {
        this.stealth = newStealth;
    }

    getBackstabbing(): number {
        return this.backstabbing;
    }

    setBackstabbing(newBackstabbing: number): void {
        this.backstabbing = newBackstabbing;
    }
}

export class Berserker extends Fighter {
    rage: number;
    unyielding: number;

    constructor() {
        super('Berserker', 70, 30, 30, 1000);
        this.rage = 2;
        this.unyielding = 2;
    }

    getRage(): number {
        return this.rage;
    }

    setRage(newRage: number): void {
        this.rage = newRage;
    }

    getUnyielding(): number {
        return this.unyielding;
    }

    setUnyielding(newUnyielding: number): void {
        this.unyielding = newUnyielding;
    }
}
