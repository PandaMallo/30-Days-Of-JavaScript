// this is your main.js script

//Level 1

let firstName = 'Lorder'
let lastName = 'Star'
let country = 'Portugal'
let city ='Lisboa'
let age = '59'
let isMarried = true
let year = new Date().getFullYear

console.log(typeof(firstName))
console.log(typeof(lastName));
console.log(typeof(country));
console.log(typeof(city));
console.log(typeof(age));
console.log(typeof(isMarried));
console.log(typeof(year));


console.log(typeof('10') === 10);
console.log(parseInt(9.8) === 10);

let nTruthy = 6
let sTruthy = 'JS rules'
let okTruthy = true

let nFalsy = NaN
let sFalsy = ''
let okFalsy = false

let i = 4 > 3 // true
let ii = 4 >= 3 //true
let iii = 4 < 3  //false
let iv = 4 <= 3  //false
let v = 4 == 4  //true
let vi = 4 === 4 // true
let vii = 4 != 4  //false
let viii = 4 !== 4  //false
let ix = 4 != '4'  //false
let x = 4 == '4'  //true
let xi = 4 === '4' //false

console.log('python'.length != 'jargon'.length);


let a = 4 > 3 && 10 < 12  //true
let aa = 4 > 3 && 10 > 12  //false
let aaa = 4 > 3 || 10 < 12  //true
let ab = 4 > 3 || 10 > 12  //true
let b = !(4 > 3)  //false
let ba = !(4 < 3)  //true
let baa = !(false)  //true
let baaa = !(4 > 3 && 10 < 12)  //false
let ac = !(4 > 3 && 10 > 12)  //true
let c = !(4 === '4')  //true

console.log(!('python'.includes('on')) && !('dragon'.includes('on')));

let today = new Date()
console.log(today.getFullYear());
console.log(today.getMonth());
console.log(today.getDate());
console.log(today.getDay());
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getTime());

//Level 2

// let triangleBase = prompt('Enter Base')
// let triangleHeight = prompt('Enter Height')
// let triangleArea = 0.5 * triangleBase * triangleHeight

// console.log(`The area of the triangle is ${triangleArea} cm`);

// let sideA = parseInt(prompt('Enter Side A'))
// let sideB = parseInt(prompt('Enter Side B'))
// let sideC = parseInt(prompt('Enter Side C'))
// let trianglePerimeter = sideA + sideB + sideC

// console.log(`The perimeter of the triangle is ${trianglePerimeter} cm`);

// let shortSide = prompt('Enter Short Side')
// let largeSide = prompt('Enter Large Side')
// let rectangleArea = shortSide * largeSide
// let rectanglePerimeter = shortSide * 2 + largeSide * 2

// console.log(`The area of the rectangle is ${rectangleArea} cm, and the perimeter ${rectanglePerimeter} cm`);

// let radius = prompt('Enter radius')
// let circleArea = Math.PI * radius**2
// let circleCircunference = 2 * Math.PI * radius

// console.log(`The area of the circle is ${circleArea}, and its circunference is ${circleCircunference}`)

// let workHours = prompt('How many hours do you work this week')
// let hoursRate = prompt('What is your rate per hour?')
// let weeklyEarn = workHours * hoursRate

// console.log(`You will be pay ${weeklyEarn} € for this week of hard work`)

// let name = prompt('Enter your name')
// name.length > 7 ? console.log('Your name is long') : console.log('Your name is short')

firstName.length > lastName.length ? console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}`) 
: console.log(`Your family name, ${lastName} is longer than your first name, ${firstName}`)

let myAge = 34
let yourAge = 67
let differenceBetweenAge = yourAge - myAge 

console.log(`You are ${differenceBetweenAge} older than me`)