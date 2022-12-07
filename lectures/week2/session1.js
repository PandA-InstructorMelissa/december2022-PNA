// Why a linked list if we have arrays?
// Linked list are dynamic in size which makes them easier to navigate and insert and remove


class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}
// SLL = Singly Linked List
class SLL {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    // Add a node to our list
    push(val) {
        let newNode = new Node(val)

        // If list is empty
        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        }
        // if its not empty find tail set the .next to the new val
        else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length ++
        return this
    }
    pop() {
        if (!this.head) {
            return undefined
        }
        var current = this.head
        var newTail = current
        while(current.next) {
            newTail = current
            current = current.next
        }
        this.tail = newTail
        this.tail.next = null
        this.length --
        if (this.length === 0) {
            this.head = null
            this.tail = null
        }
        return current
    }
}
let computer = new SLL()
console.log("***", computer.head, computer.tail, computer.length)
computer.pop()
console.log("!!!***", computer.head, computer.tail, computer.length)
computer.push('Turn on Computer')
console.log("***@@@", computer.head, computer.tail, computer.length)
computer.push('Open Browser')
console.log("***@@@^^^", computer.head, computer.tail, computer.length)
computer.pop()
console.log("!!!***", computer.head, computer.tail, computer.length)