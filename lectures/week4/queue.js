// Javascript Queue is one of the linear data structures used to store data in the memory. Queue is a linear data structure that stores data sequentially based on the First In First Out (FIFO) manner. The queue data structure is also known as the First Come, First Served data structure.

function Queue() {
    var line = []
    
    this.print = function() {
      console.log("Our line has the following: ", line)
    }
    this.enqueue = function(element) {
      line.push(element)
    }
    this.dequeue = function() {
      return line.shift()
    }
    this.size = function() {
      return line.length
    }
    this.isEmpty = function() {
      return (line.length === 0)
    }
  }
  
  var foodTruck = new Queue()
  // console.log("Food truck arrives but is closed")
  // console.log("Is our line empty?: ", foodTruck.isEmpty())
  // foodTruck.print()
  // Food truck opens
  // console.log("Food Trucks opens")
  foodTruck.enqueue('Jane Doe')
  // foodTruck.print()
  foodTruck.enqueue('John Doe')
  // foodTruck.print()
  foodTruck.dequeue()
  // console.log("Jane got her food")
  // foodTruck.print()
  foodTruck.enqueue("John Smith")
  foodTruck.enqueue("Purrl")
  foodTruck.enqueue("Copper Tone")
  // foodTruck.print()
  // console.log("The length of our line is: ", foodTruck.size())
  // console.log("Is our line empty?: ", foodTruck.isEmpty())
  
  
  function PriorityQueue() {
    var line = []
    this.theLine = function() {
      console.log("Our line has the following: ", line)
    }
    this.isEmpty = function() {
      return (line.length === 0)
    }
    this.enqueue = function(e) {
      if(this.isEmpty()) {
        line.push(e)
      }
      else {
        var added = false
        for (var p = 0; p < line.length; p++) {
          if(e[1] < line[p][1]) {
            line.splice(p, 0, e)
            added = true
            break
          }
        }
        if(!added) {
          line.push(e)
        }
      }
    }
    this.dequeue = function() {
      var gotFood = line.shift()
      return gotFood[0]
    }
    this.front = function() {
      return line[0]
    }
  }
    
  var betterFood = new PriorityQueue()
  betterFood.theLine()
  console.log("Is the line empty? ", betterFood.isEmpty())
  
  betterFood.enqueue(['Navy Veteran', 2])
  betterFood.enqueue(['Grandma', 1])
  betterFood.enqueue(['Student', 4])
  betterFood.enqueue(['Man on Crutches', 1])
  betterFood.theLine()
  betterFood.dequeue()
  betterFood.theLine()
  betterFood.enqueue(['Grandpa', 1])
  betterFood.enqueue(['Another Veteran', 2])
  betterFood.dequeue()
  betterFood.dequeue()
  console.log(betterFood.front(), "Is at the front of our line")
  betterFood.theLine()