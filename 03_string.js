//const myName = "Alissa"
//console.log(typeof myName)
//const age = 26
//function getAge(){
    //return age
//}
//const output = `Hi, my name is ${myName} and I'm ${age < 30 ? "A": "B"} y.o.`
//console.log(output)

//const output = `
//<div>This is dive</div>
//<p>this is o</p>`
//console.log(output)
//console.log(output.length)
//console.log(output.toUpperCase())
//console.log(output.toLowerCase())
//console.log(output.charAt(2))
//console.log(output.indexOf(">"))
//console.log(output.indexOf("!"))
//console.log(output.toUpperCase().startsWith("iv"))
//console.log(output.startsWith("is")) // check if string starts with, result: true/false
//console.log(output.endsWith("/p>")) // check if string ends with, result: true/false
//console.log(output.repeat(3))
//const nameMe = "     Alissa     "
//console.log(nameMe)
//console.log(nameMe.trim()) // cut spaces from start and end of string
//console.log(nameMe.trimLeft())
//console.log(nameMe.trimRight())

//function logPerson(s, name, age){
    //console.log(s, name, age)
    //return "Info about person"
//}
//const personName = "Alissa"
//const personAge = 38
//const output = logPerson`Name: ${personName}, Age: ${personAge}!`
//console.log(output)

function logPerson(s, name, age){
    if (age < 0){
        age = "Wasn't born yet."
    }
    return `${s[0]}${name}${s[1]}${age}${s[2]}`
}
const personName = "Alissa"
const personAge = 38
const output = logPerson`Name: ${personName}, Age: ${personAge}!`
console.log(output)
const personName1 = "Narajana"
const personAge1 = -10
const output1 = logPerson`Name: ${personName1}, Age: ${personAge1}!`
console.log(output1)