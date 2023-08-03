// IWA_02 Challenge 1

/****************************************************************************/
//Broken
/* This is the firstname of the user /*

const user = 'John'


/* This is the lastname of the user /* const surname = 'Smith'


console.log(user; surname;)

/****************************************************************************/
//Fixed
/* This is the firstname of the user */

const user = 'John'


/* This is the lastname of the user */

const surname = 'Smith'


console.log(user, surname)







// IWA_02 Challenge 2

/****************************************************************************/
//Broken
/** (c) ACME Inc. 2010 */

/*
 * This is the date that a user created their account 
 */
//const date = '10/07/2014'

//console(date)

/****************************************************************************/
//Fixed
/** (c) ACME Inc. 2010 */

/**
 * This is the date that a user created their account 
 */
const date = '10/07/2014'

console.log(date)










// IWA_02 Challenge 3

/****************************************************************************/
//Broken
// 
//It is important to show the following message in order to:
//- to assure users
//- to scare hackers
//- to impress investors
//

//console.warn(Security scan starting)

/* It is important to let user know when they can close the page  /*

cnosole.info('Please wait for scan to complete before closing the browser.)

/****************************************************************************/
//Fixed
/* 
It is important to show the following message in order to:
- to assure users
- to scare hackers
- to impress investors
*/

console.warn('Security scan starting')

/* It is important to let user know when they can close the page */

console.info('Please wait for scan to complete before closing the browser.')