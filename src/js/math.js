export default class Math {
    constructor(basicAttack) {
        this.basicAttack = basicAttack;
        this.stoned = false;
        this.distance = 1;
    }
    get attack() {
        if (this.stonedHit) {
            return this.basicAttack - 2 * this.distance * 5;
        } else {
            if (this.distance === 1) return this.basicAttack
            if (this.distance === 2) return this.basicAttack - ((this.basicAttack / 100) * 10)
            if (this.distance === 3) return this.basicAttack - ((this.basicAttack / 100) * 20)
            if (this.distance === 4) return this.basicAttack - ((this.basicAttack / 100) * 30)
            if (this.distance > 4) return this.basicAttack - ((this.basicAttack / 100) * 40)
        }
    }
    get stonedHit() {
        return this.stoned;
    }
    set stonedHit(status) {
        this.stoned = status;
    }
    hit(distance) {
        this.distance = distance;
    }
  }

