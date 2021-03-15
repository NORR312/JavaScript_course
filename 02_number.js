//NUMBERS
//const num = 42
//const float = 42.42
//const pow=10e3 // 10**3
// Number.MAX_SAFE_INTEGER - max number
//console.log('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER)
//console.log('Math.pow', Math.pow(2, 53)-1)
//console.log('MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER)
//console.log('MAX_VALUE', Number.MAX_VALUE)
//console.log('MIN_VALUE', Number.MIN_VALUE)
//console.log('POSITIVE_INFINITY', Number.POSITIVE_INFINITY)
//console.log('NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY)
//console.log('NEGATIVE_INFINITY', 1/0, 2/0) // result: Infinity
//console.log(Number.NaN, 'type of NaN:', typeof NaN)
//const wierd = 2/undefined
//console.log('2/undefined', wierd, 'isNaN(wierd):', isNaN(wierd), 'isNaN(2):',isNaN(2))
//console.log('2/undefined', wierd, 'Number.isFinite(wierd):', Number.isFinite(wierd), 'Number.isFinite(2):', isFinite(2))
////console.log('2/undefined', wierd, isNaN(wierd), isNaN(2))
//const stringInt = '40'
//const stringFloat ='40.42'
//console.log(stringInt + 2)
//console.log(Number.parseInt(stringInt) + 2) //string to integer number
//console.log(+stringInt + 2) //string to integer number
//console.log(parseFloat(stringFloat) + 0.5) //string to float number
//console.log(+stringFloat + 0.5) //string to float number

//#######################################################################################
//console.log(0.4 + 0.2) // expected 0.6, but indeed will be 0.6000000000000001
//console.log(+(0.4 + 0.2).toFixed(1)) // convert to string and cut to 0.6
//console.log(parseFloat((0.4 + 0.2).toFixed(1)))

//############################################################################################3
//BigInt > MAX_SAFE_INTEGER
// BigInt (i.e. 9007199254740991999999999999n) can't be mixed with other types
//console.log(Number.MAX_SAFE_INTEGER)
//console.log(typeof 9007199254740991999999999999n)
//console.log(9007199254740991999999999999n - 900719925474099199999999999n)
//console.log(parseInt(10n) - 4) // 6 - result integer
//console.log(10n - BigInt(4)) // 6n - BigInt

//#################################################################################################################
// MATH - OBJECT
//console.log(Math.E)
//console.log(Math.PI)
//console.log(Math.sqrt(25)) //res 5
//console.log(Math.pow(5, 3)) //res 125
//console.log(Math.abs(-24)) //res 24
//console.log(Math.max(25, 10, 422, -768)) // res 422
//console.log(Math.floor(4.9)) //res 4
//console.log(Math.ceil(4.9)) //res 5
//console.log(Math.round(4.9)) //res 5
//console.log(Math.random())
//console.log(Math.trunc(4.9)) //res 4
// Eample ##################################################
function getRandomBetween(min, max){
return Math.floor(Math.random() * (max-min+1)+min)
}
const randomNumber = getRandomBetween(10, 42)
console.log(randomNumber)