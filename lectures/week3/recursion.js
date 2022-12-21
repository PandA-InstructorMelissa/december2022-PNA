const sadDay = () => {
    console.log("The P&A Cruise is almost over")
    sadDay()
}
// sadDay()

var a = 0
const sadDay2 = () => {
    console.log("The P&A Cruise is almost over")
    if(a == 5) {
        return
    } else {
        a++
        sadDay2()
    }
}
// sadDay2()


var sum = 0
const add = (num) => {
    for (let i=0; i <=num; i++) {
        sum=sum+i
        console.log("the sum", sum)
    }
}
// add(24)

var sum = 0
const newAdd = (num) => {
    sum = sum + num
    console.log('the sum', sum)
    var newNum = num + 1
    if (newNum <= 100) {
        newAdd(newNum)
    }
}


// 3
// Create a function that can look through an array of any dimension, that is a list that could have any number of lists in it, and will return the sum of all values within.
// Using this five dimensional array should return 80
data = [
    3,
    [1, 2, 3, 4],
    [
        [1, 2, 3, 4],
        [1, 2, 3, 4, 5],
        [
            [1, 2, 3],
            [1, 2, 3, 4, [1, 2, 3, 4]],
        ]
    ],
    [3, 4, 5],
    1,
    3,
]
// if typeOf == array, loop through values  if index =  array sum contents of array
// for loop
// conditional
var sum = 0
// for (var i = 0; i < data.length; i++) {
//     sum = sum + data[i]
// }
// console.log(sum)
// This just concatenates the numbers together doesn't sum them

// console.log('data length', data.length)
function funWithRecursion(d) {
    for (var i = 0; i < d.length; i++){
        if(!Array.isArray(d[i])) {
            sum = sum + d[i]
        } else {
            funWithRecursion(d[i])
        }
    }
    return sum
}
console.log(funWithRecursion(data))
// console.log('the final Sum', sum)