//alert(1)
//1 VARIABLES
//################################################################################################################################
// style guid: valueName 
// 99% case ;-symbole is not required
//var firstName = 'Alissa' // old version, can be changed, it's better don't use it
//const LastName = 'Serchenko' // readonly, can't be changed, but can be readed
//const age = 38
//const isProgrammer = true
// if variable's name will not be changed, it's a good manner to use const
//let ageNow = 38
//name = 'Olesya'
//console.log(firstName) //name will be shown on screen
//console.log(LastName)
//ageNow = 'thirty eight' // data type can be changed
////console.log(age)
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
//const a = 10
//const b = 5
//let currentYear = 2021
//let c = 32
//console.log(a+b)
//console.log(a-b)
//console.log(a*b)
//console.log(a/b)
//console.log(currentYear++) //increment currentYear + 1: first console log -> increment, result: currentYear = 2021
//console.log(currentYear) // already incremented currentYear = 2022
//console.log(++currentYear) // first increment -> console log, result: currentYear = 2023
//console.log(--currentYear) // first increment -> console log, result: currentYear = 2022
//c+=a //c= c+a
//c-=a //c= c-a
//c*=a //c= c*a 
//c/=a //c= c/a 
//console.log(c)

//####################################################################################################3333
//DATA TYPES
//#####################################################################################################################
//const isProgrammer = true
//const name = 'Alissa'
//const age = 38
//let x
//null
//console.log(typeof isProgrammer) //result: boolean
//console.log(typeof name) //result: string
//console.log(typeof age) //result: number
//console.log(typeof x) //result: undefined
//console.log(typeof null) //result: object - a bug of javascript.
// instead
//console.log(null)

//######################################################################
// OPERATORS PRIORITY
//###########################################################################################
//const fullAge = 38
//const birthYear = 1982
//const currentYear = 2021
//// > < >= <=
//const isFullAge = currentYear - birthYear >= fullAge
//console.log(isFullAge)

//##############################################################################
//CONDITIONAL OPERATORS
//###############################################################################################
//const courseStatus = 'pending1' //ready, fail, pending
//if (courseStatus === 'ready'){
//console.log('Course is ready for studying')
//}
//else if (courseStatus === 'pending'){
    //console.log('Course is in progress')
//}
//else {
    //console.log('Course failed')
//}

const isReady = true
if (isReady) {
    console.log('Everything is ready')
}
else {
    console.log('Nothing is ready')
}
// ternary expression  #######################################################################
//############################################################################################
// equivalent to previous statement               ############################################
isReady ? console.log('Yes'): console.log('No') //############################################
//############################################################################################
// == or ===
// == check values only
// === check values and data types
const num1 = 42
const num2 ='42'
console.log(num1 == num2) // true
console.log(num1 ===num2) // false 
//############################################################################################
// BOOLEAN LOGIC, logical operators
// mdn - mozilla developer network
//############################################################################################
// FUNCTION
//function calculateAge(year) {
    //return 2021 - year
//}
//const myAge = calculateAge(1982)
//console.log(myAge)
//
//function logInfoAbout(name, year) {
    //const age = calculateAge(year)
    //if (age > 0) {
        //console.log('person with name',name, age, 'Years old')
    //} else {
        //console.log("It's already future!")
    //}
//    
//}
//logInfoAbout('Alissa', 1982)
//logInfoAbout('Jani', 1974)
//logInfoAbout('Lotta', 2021)

//##########################################################################################
// ARRAYS ############
//####################
const cars = ['Mazda', 'Mersedes', 'Ford']
console.log(cars)