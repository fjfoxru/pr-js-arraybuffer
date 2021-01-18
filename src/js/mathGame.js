export default class MathGame {
    constructor(basicAttack) {
        this.basicAttack = basicAttack;
        this.attackNow = basicAttack;
        this.stonedStatus = false;
    }
    get attack() {
        return this.attackNow
    }
    set attack(distance) {
        let attack;
        if (distance === 1) attack = this.basicAttack
        if (distance === 2) attack = this.basicAttack - ((this.basicAttack / 100) * 10)
        if (distance === 3) attack = this.basicAttack - ((this.basicAttack / 100) * 20)
        if (distance === 4) attack = this.basicAttack - ((this.basicAttack / 100) * 30)
        if (distance > 4) attack = this.basicAttack - ((this.basicAttack / 100) * 40)
        if (this.stoned) {
            this.attackNow = attack - Math.log2(distance) * 5;
        } else {
            this.attackNow = attack
        }
        
    }

    get stoned() {
        return this.stonedStatus;
    }
    set stoned(status) {
        this.stonedStatus = status;
    }
    hit(distance) {
        this.attack = distance;
    }
  }

