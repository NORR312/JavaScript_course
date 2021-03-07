//alert(1)
//1 VARIABLES
//################################################################################################################################
// style guid: valueName 
// 99% case ;-symbole is not required
var firstName = 'Alissa' // old version, can be changed, it's better don't use it
const LastName = 'Serchenko' // readonly, can't be changed, but can be readed
//const age = 38
const isProgrammer = true
// if variable's name will not be changed, it's a good manner to use const
let ageNow = 38
//name = 'Olesya'
//console.log(firstName) //name will be shown on screen
//console.log(LastName)
ageNow = 'thirty eight' // data type can be changed
//console.log(age)
// _ , $, ... variables name accepted.
// const 5Num = 5 - error, number can't be a start of variable name
//console.log('Age of person:', age)
//console.log('Name of person: ' + firstName + ', and age is '+age)
//alert('Name of person: ' + firstName + ', and age is '+age) //alert function in browser, not in JavaScript, not for server or mobile
//const lastName=prompt('Enter last name') //analog input(Python), data from user
//alert(firstName+' '+lastName)

//##############################################################################################################################
//OPERATORS
//######################################################################################################################
//const currentYear = 2021
//const birthYear = 1982
//const age = currentYear - birthYear
//console.log(age)
const a = 10
const b = 5
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)

let currentYear = 2021
console.log(currentYear++) //increment currentYear + 1: first console log -> increment, result: currentYear = 2021
console.log(currentYear) // already incremented currentYear = 2022
console.log(++currentYear) // first increment -> console log, result: currentYear = 2023