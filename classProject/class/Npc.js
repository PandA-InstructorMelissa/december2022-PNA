class Npc {
    constructor(npcName, morals, items, strength) {
        this.npcName = npcName
        this.health = 100
        this.morals = morals
        this.items = items
        this.strength = strength
    }

    dropItems() {
        this.items.pop()
        return this
    }
    reduceHealth() {
        if (this.health > 5) {
            this.health -= 5
        } else {
            this.health -= 5
            console.log(`${this.npcName}, has been bested`)
        }
    }
    reduceStrength() {

    }
}
