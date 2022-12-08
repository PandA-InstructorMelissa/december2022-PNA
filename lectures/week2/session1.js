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
    // Add to the beginning
    unshift(val) {
        let newNode = new Node(val)
        // List is empty

        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        }
        else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }

    // Remove from the end
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
    // Removing from the front
    shift() {
        if (!this.head) {
            return undefined
        }
        var current = this.head
        this.head = current.next
        this.length--
        if(this.length ===0) {
            this.tail = null
        }
        return current
    }
    // Find node by it's given index
    get(index) {
        if(index < 0 || index >= this.length) return null;
        var counter = 0;
        var current = this.head;
        while(counter !== index){
            current = current.next;
            counter++;
        }
        return current;
    }
    // Change a node in the list
    set(index, val) {
        var foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }
    // How we would typically add a node to the list
    insert(index, val) {
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(val);
        if(index === 0) return !!this.unshift(val);
        
        var newNode = new Node(val);
        var prev = this.get(index - 1);
        var temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }
    // Normal way to remove from list
    remove(index) {
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        var previousNode = this.get(index - 1);
        var removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        return removed;
    }
    // Reverse the list
    reverse() {
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var next;
        var prev = null;
        for(var i = 0; i < this.length; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}
let computer = new SLL()
// console.log("***", computer.head, computer.tail, computer.length)
// computer.pop()
// console.log("!!!***", computer.head, computer.tail, computer.length)
computer.push('Turn on Computer')
// console.log("***@@@", computer.head, computer.tail, computer.length)
computer.push('Open Browser')
// console.log("***@@@^^^", computer.head, computer.tail, computer.length)
// computer.pop()
// console.log("!!!***", computer.head, computer.tail, computer.length)
computer.unshift('Plug in Computer')
// console.log("unshift", computer.head, computer.tail, computer.length)
console.log("get", computer.get(1))
computer.set(2, 'Log into Computer')
console.log("set", computer.head, computer.tail, computer.length)
computer.reverse()
console.log("reverse", computer.head, computer.tail)


