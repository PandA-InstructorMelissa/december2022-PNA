class Player {
    constructor(playerName, morals) {
        this.playerName = playerName
        this.morals = morals // Good VS Bad
        this.health = 100 // max is 100 changes by 5
        this.strength = 10 // Can gain when wins fight or lose when looses
        this.level = 1
        this.speed = 1 // Attack speed / times attacking per move
        this.attempts = 3 // lives
        this.items = ['axe']
        this.skills = []
        this.alive = true
    }
    pickUpItem(item) {
        this.items.push(item)
        return this
    }
    reduceStrength() {
        if (this.strength == 1) {
            this.strength -= 1
            console.log(`${this.playerName}, you have lost all strength and died`)
            if (this.attempts != 0) {
                console.log(`${this.playerName}, you have another chance`)
                this.attempts -= 1
            } else {
                console.log(`${this.playerName}, you are out of attempts, Game Over`)
                this.alive = false
            }
        }
        else {
            this.strength -= 1
        }
        return this.alive
    }
    reduceHealth() {
        if (this.health > 5) {
            this.health -= 5
        }
        if (this.health <= 5) {
            this.health -= 5
            console.log(`${this.playerName}, you have died`)
            if (this.attempts != 0) {
                console.log(`${this.playerName}, you have another chance`)
                this.attempts -= 1
            } else {
                console.log(`${this.playerName}, you are out of attempts, Game Over`)
                this.alive = false
            }
        }
        return this.alive
    }
    increaseStrength() {
        this.strength += 1
        return this
    }
    increaseHealth() {
        if(this.health == 100) {
            console.log(`${this.playerName}, you are at full health`)
        } else {
            this.health+=5
        }  
        return this
    }
}