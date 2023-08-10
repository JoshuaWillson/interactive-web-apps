const FREE_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = 0

const customers = '1'
const country = 'RSA'
let currency = null
let shipping = null

if (country === 'RSA') { 
    shipping = 400
    currency = 'R' 
} else {
    shipping = 800
    currency = '$'
}

if (country === 'NAM') {
    shipping = 600
    currency = '$' 
}

const shoes = 300 * 1
const toys = 100 * 5
const shirts = 150 * NONE_SELECTED
const batteries = 35 * 2
const pens = 5 * NONE_SELECTED
const price = shoes + toys + shirts + batteries + pens

if (country === 'RSA' && price >= 1000 || 
    country === 'NAM' && price >= 60) {
	shipping = 0
}

if (shipping === 0 && customers !== '1') { 
    console.log(FREE_WARNING) 
}

if(country === 'NK') {
    console.log(BANNED_WARNING)
} else {
    console.log('Price:', currency, price + shipping)
}

