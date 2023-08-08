// IWA_03 Challenge 1

// Broken

// import company form 'configuration'           *
// import year form 'configuration'              *

// const message = '© ' + company + ' (' + year + ')'
// document.querySelector('footer').innerText = message

/************************************************************/

// Fixed

import {company} from './configuration.js'
import {year} from './configuration.js'

const message = '© ' + company + ' (' + year + ')'
document.querySelector('footer').innerText = message

// IWA_03 Challenge 2

// Broken

// console.log('Roles:', nwabisa.role, johanes.role, alex.role)         *

/************************************************************/

// Fixed

import {firstname as firstNameNwabisa, surname as surnameNwabisa, role as roleNwabisa} from './nwabisa.js'
import {firstname as firstNameJohannes, surname as surnameJohannes, role as roleJohannes} from './johannes.js'
import {firstname as firstNameAlex, surname as surnameAlex, role as roleAlex} from'./alex.js'

const displayNwabisa = firstNameNwabisa + " " + surnameNwabisa + " (" + roleNwabisa + ")"
const displayJohannes = firstNameJohannes + " " + surnameJohannes + " (" + roleJohannes + ")"
const displayAlex = firstNameAlex + " " + surnameAlex + " (" + roleAlex + ")"

document.querySelector('#nwabisa').innerText = displayNwabisa
document.querySelector('#johannes').innerText = displayJohannes
document.querySelector('#alex').innerText = displayAlex


console.log('Roles:', roleNwabisa, ',', roleJohannes, ',', roleAlex)