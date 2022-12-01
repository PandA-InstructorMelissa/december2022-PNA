// Strings


// 1. Pull the current date and time
const dateTimeString = new Date()
// 2. Console.log the current date and time
console.log(`Robert L7: ${dateTimeString}`)

// 3. console.log the time only
const time01 = dateTimeString.getHours() + ':' + dateTimeString.getMinutes() + ':' + dateTimeString.getSeconds(); //<- this is ugly. :D
console.log(`ML ln11: ${time01}`)

const time02 = dateTimeString.toTimeString()
console.log(`ML LN14: ${time02}`)

const time = dateTimeString.toLocaleTimeString();
console.log(`Robert L13: ${time}`)

// 4. console.log the date only
const date = dateTimeString.toLocaleDateString();
console.log(`Robert L17: ${date}`)

const dateFormat = (dateTimeString) => {
    return `${dateTimeString.getFullYear()} / ${dateTimeString.getMonth()} / ${dateTimeString.getDate()}` // why is the month off by 1 though
}
console.log(`Carlos L22: ${dateFormat(dateTimeString)}`)
// 5a. What time zone is displaying?
// EST

// 5b. Change to the different time zones (ET, CT, MT, PT)
const mtTime = dateTimeString.toLocaleTimeString('en-US', {
    timeZone: 'America/Denver'
})
const ctTime = dateTimeString.toLocaleTimeString('en-US', {
    timeZone: 'America/Chicago'
})

console.log(`Robert L35: ${mtTime}`)
console.log(`Melissa L35: ${ctTime}`)

const ptTime = dateTimeString.toLocaleTimeString('en-US', { // thank you LOL
    timeZone: 'America/Los_Angeles'
})

console.log(`Robert L41: ${ptTime}`)

function convertTZ(date, tzString) {
    return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));
}
console.log(`Carlos L40: ${convertTZ(dateTimeString, "America/Los_Angeles")}`)
// that needs to be a string. sweet, thanks. AWESOME! try it! :D try now? I added Time to the function. That is.... strange.

// Using the provided HTML file create functions to display things on the page (you can not edit the html document) and have a console.log for each


// 6. Display date and time
const dateTime = document.getElementById('dateTime')
dateTime.innerHTML = dateTimeString
// 7a. Display time only
const mtElement = document.getElementById("mt")
const ctElement = document.getElementById("ct")

mtElement.innerText = 'MT: ' + mtTime;
ctElement.innerText = 'CT: ' + ctTime;
document.getElementById('pt').innerHTML ="PST: " + ptTime;

// 7b. Include the current time zone in the display
const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;

console.log(`Robert L70 ${tz}`); // does this work?

// 8. Display date only
function theDate() {
    // console.log("inside the function")
    var t = new Date()
    var temp = t.toString()
    dateOnly = temp.slice(4, 15)
    console.log("the date:", temp)
    document.getElementById('date').innerHTML = dateOnly
}
theDate()
// 9. Display time only in each time zone listed

function est() { // the -4*60*60*100 makes the time go back 4 hours
    est = new Date(new Date().getTime() + -4*60*60*1000).toUTCString('en-GB')
    console.log('EST: ', est)
    adjust = est.slice(-13)
    cut = adjust.substr(0,10)
    zone = 'ET'
    final = cut + zone
    document.getElementById('et').innerHTML = final
}
est()
// Bonus questions

// 1. If there are differences in how the html displays and its corresponding console.log prints why?
// 2. Are there other ways we can change what is displayed?

// Arrays


// 1. Max, Min, Average Given an array, print the max, min and average values for that array.

// 2. Given an array that could contain indexes of arrays, determine the amount of numbers in all indexes. Example: lengthNested([4,[],8,[9,6,3],7]) returns 6. Do not consider there being a third level of nesting (something such as [11,[[6]]]).

// 3. Same as above, but do not count empty indexes. [6, 4, , 8] should return 3, not 4.