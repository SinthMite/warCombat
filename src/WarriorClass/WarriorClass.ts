export class Fighter{
    name: string
    strength: number
    speed: number
    agility: number
    health: number
    constructor(name: string, strength: number, speed: number, agility: number, health:number){
        this.name = name
        this.strength = strength
        this.speed = speed
        this.agility = agility
        this.health = health
    }
    getName(){
        return this.name
    }
    setName(newName:string){
        this.name = newName
    }
    getStrength(){
        return this.strength
    }
    setStrength(newStrength:number){
        this.strength = newStrength
    }
    getSpeed(){
        return this.speed
    }
    setSpeed(newSpeed:number){
        this.speed = newSpeed
    }
    getAgility(){
        return this.agility
    }
    setAgility(newAgility:number){
        this.agility = newAgility
    }
    getHealth(){
        return this.health
    }
    setHealth(newHealth:number){
        this.health = newHealth
    }
    attack(opponent: Fighter){
        const damage = Math.floor(Math.random() * (this.strength + this.agility))
        opponent.health -= damage
        console.log(`${this.name} attacks ${opponent.getName()} and deals ${damage} damage`)
        return (`${this.name} attacks ${opponent.getName()} and deals ${damage} damage`)
    }
}

export class Knight extends Fighter{
    swordSkill: number
    shieldSkill: number
    constructor(name: string, strength: number, speed: number, agility: number, health:number, swordSkill: number, shieldSkill: number){
        super(name, strength, speed, agility, health)
        this.swordSkill = swordSkill
        this.shieldSkill = shieldSkill
    }
    getSwordSkill(){
        return this.swordSkill
    }
    setSwordSkill(newSwordSkill:number){
        this.swordSkill = newSwordSkill
    }
    getShieldSkill(){
        return this.shieldSkill
    }
    setShieldSkill(newShieldSkill:number){
        this.shieldSkill = newShieldSkill
    }
}

export class Rogue extends Fighter{
    stealth: number
    backstabbing: number
    constructor(name: string, strength: number, speed: number, agility: number, health:number, stealth: number, backstabbing: number){
        super(name, strength, speed, agility, health)
        this.stealth = stealth
        this.backstabbing = backstabbing
    }
    getStealth(){
        return this.stealth
    }
    setStealth(newStealth:number){
        this.stealth = newStealth
    }
    getBackstabbing(){
        return this.backstabbing
    }
    setBackstabbing(newBackstabbing:number){
        this.backstabbing = newBackstabbing
    }
}

export class Berserker extends Fighter{
    rage: number
    unyielding: number
    constructor(name: string, strength: number, speed: number, agility: number, health:number, rage: number, unyielding: number){
        super(name, strength, speed, agility, health)
        this.rage = rage
        this.unyielding = unyielding
    }
    getRage(){
        return this.rage
    }
    setRage(newRage:number){
        this.rage = newRage
    }
    getUnyielding(){
        return this.unyielding
    }
    setUnyielding(newUnyielding:number){
        this.unyielding = newUnyielding
    }

}
