// A Stack is an ordered collection of items that follow the Last In First Out (LIFO) principle

let stackOfDishes = []

let theDishes = "Grandmas Dishes"
// theDishes = "racecar"

console.log('the dishes', theDishes)

for (var d = 0; d < theDishes.length; d++) {
    stackOfDishes.push(theDishes[d])
}
console.log('dishes', stackOfDishes, 'number of dishes', stackOfDishes.length)

let table = ''
console.log('the table', table)

var len = stackOfDishes.length
for (var d = 0; d < len; d++) {
    table += stackOfDishes.pop()

}
console.log('we set the table Grandma!', table)

// Check to see if theDishes and table are a palindrome

// if (table === theDishes) {
//     console.log(theDishes + " is a palindrome")
// }
// else {
//     console.log(theDishes + " is NOT a palindrome")
// }

// Creates a stack we are adding things a trunk
var Stack = function() {
    this.count = 0;
    this.storage = {};
  
    // Adds an item to the trunk
    this.push = function(value) {
        this.storage[this.count] = value;
        this.count++;
    }
    
    // Removes and returns the number of items in the trunk
    this.pop = function() {
        if (this.count === 0) {
            return undefined;
        }
      else {
        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
      }
    }
    
//   the number of items in the trunk
    this.size = function() {
        return this.count;
    }
    
    // Returns the last item added from the trunk
    this.peek = function() {
        return this.storage[this.count-1];
    }
}
var myTrunk = new Stack()
myTrunk.push(stackOfDishes)