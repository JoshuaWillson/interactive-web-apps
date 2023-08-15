// IWA_07

// Challenge 1

const value = 3 //"3" is a string which needs to be the number 3
console.log(value + 4 + value) //value was a string therefore it was being concatinated instead of added

// Challenge 2

const nickname= "Timmy";
const firstname = "Timothy";

console.log(nickname || firstname === true?`${`Good Morning ${nickname || firstname}!`}`:'Good Morning!')

// Challenge 3

const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.2'

const divider = '----------------------------------'

// Only change below this line

const owed = `R ${Math.abs(parseFloat(leoBalance) + parseFloat(sarahBalance)).toFixed(2)}`
const leo = `${leoName} ${leoSurname.trimEnd()} (Owed: R ${Math.abs(parseFloat(leoBalance)).toFixed(2)})`
const sarah = `${sarahName.trimEnd()} ${sarahSurname} (Owed: R ${Math.abs(parseFloat(sarahBalance)).toFixed(2)})`
const total = "Total amount owed:"
const result = `\n${leo} \n${sarah} \n\n${divider} \n  ${total} ${`${owed.substring(0, 4)} ${owed.substring(4, 10)}`} \n${divider}`

console.log(result)
