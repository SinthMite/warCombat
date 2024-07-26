export class Fighter {
    name: string;
    strength: number;
    speed: number;
    agility: number;
    health: number;

    constructor(name: string, strength: number, speed: number, agility: number, health: number) {
        this.name = name;
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
        console.log(`${this.name} attacks ${opponent.getName()} and deals ${damage} damage`);
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
            console.log(`${this.name} dodges the attack`);
            return `${this.name} dodges the attack`;
        } else {
            const attackMessage = opponent.attack(this);
            console.log(attackMessage);
            return attackMessage;
        }
    }

    parry(opponent: Fighter): string {
        const myAttack = this.calculateAttackDamage();
        const opponentAttack = opponent.calculateAttackDamage();

        if (opponentAttack > myAttack) {
            this.health -= (opponentAttack - myAttack);
            console.log(`${this.name} parries but still takes ${opponentAttack - myAttack} damage`);
            return `${this.name} parries but still takes ${opponentAttack - myAttack} damage`;
        } else if (opponentAttack < myAttack) {
            opponent.health -= (myAttack - opponentAttack);
            console.log(`${this.name} parries and deals ${myAttack - opponentAttack} damage to ${opponent.getName()}`);
            return `${this.name} parries and deals ${myAttack - opponentAttack} damage to ${opponent.getName()}`;
        } else {
            console.log(`${this.name} and ${opponent.getName()} parry each other's attacks with no damage`);
            return `${this.name} and ${opponent.getName()} parry each other's attacks with no damage`;
        }
    }
}

export class Knight extends Fighter {
    swordSkill: number;
    shieldSkill: number;

    constructor(name: string, strength: number, speed: number, agility: number, health: number, swordSkill: number, shieldSkill: number) {
        super(name, strength, speed, agility, health);
        this.swordSkill = swordSkill;
        this.shieldSkill = shieldSkill;
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

    constructor(name: string, strength: number, speed: number, agility: number, health: number, stealth: number, backstabbing: number) {
        super(name, strength, speed, agility, health);
        this.stealth = stealth;
        this.backstabbing = backstabbing;
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

    constructor(name: string, strength: number, speed: number, agility: number, health: number, rage: number, unyielding: number) {
        super(name, strength, speed, agility, health);
        this.rage = rage;
        this.unyielding = unyielding;
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
