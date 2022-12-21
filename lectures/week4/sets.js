// A JavaScript Set is a collection of unique values. Each value can only occur once in a Set. A Set can hold any value of any data type.

function Coins() {
    // Our box of coins
    var coinBox = []
    // This checks if the coin year is already in the box
    this.has = function(element) {
        return (coinBox.indexOf(element) !== -1)
    }
    // This allows us to see what in our box
    this.values = function() {
        return coinBox
    }
    // Here is where we are adding coins to our box if we don't already have that year
    this.add = function(element) {
        if(!this.has(element)) {
            coinBox.push(element)
            return true
        }
        return false
    }
    // if our box has the year we ask for go to that spot and remove it
    this.remove = function(element) {
        if(this.has(element)) {
            index = coinBox.indexOf(element)
            coinBox.splice(index, 1)
            return true
        }
        return false
    }
    // checking to see the length or size of our collection
    this.size = function() {
        return coinBox.length
    }
//   compare 2 coins set to see what they have in common
    this.intersect = function(coll02) {
      var common = new Coins()
      var coll01 = this.values()
      coll01.forEach(function(e) {
        if(coll02.has(e)) {
          common.add(e)
        }
      })
      return common
    }
  
//   compare 2 coin set to see what have different
    this.diff = function(coll02) {
      var diff = new Coins()
      var coll01 = this.values()
      coll01.forEach(function(e) {
        if(!coll02.has(e)) {
          diff.add(e)
        }
      })
      return diff
    }

}

var pennies = new Coins()
var dimes = new Coins()
var quarters = new Coins()

pennies.add(1980)
pennies.add(1981)
quarters.add(1981)
dimes.add(1990)
pennies.add(1990)
pennies.add(1978)
quarters.add(1978)
dimes.add(1990)
console.log("How big is our Penny collection?: ", pennies.size())
console.log("How big is our Quarter collection?: ", quarters.size())
console.log("How big is our Dime collection?: ", dimes.size())

console.log("What do our Penny and Quarter collections have in common", pennies.intersect(quarters).values())
console.log("What do our Dime and Quarter collections have thats different", dimes.diff(quarters).values())