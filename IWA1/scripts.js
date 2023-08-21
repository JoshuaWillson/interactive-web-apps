const MAX_NUMBER = 15
const MIN_NUMBER = -15
const STEP_AMOUNT = 1

const elements = {
    number: document.querySelector('[data-key = "number"]'),
    subtract:  document.querySelector('[data-key = "subtract"]'),
    add:  document.querySelector('[data-key = "add"]'),

}

const updateColor = () => {
    const value = elements.number.value
    const singleStep = 250 / (MAX_NUMBER - MIN_NUMBER)
    const distMax = MAX_NUMBER - value
    const distMin = value - MIN_NUMBER
    const red = distMax * singleStep
    const green = distMin * singleStep
    elements.number.style.color = `rgb(${red}, ${green}, 50)`;
    
}


/**
 * Converts a string value to either upper or lower case.
 * @param {string} text - The text value to transform
 * @param {"uppercase" | "lowercase"} [format] - How to transform the case. If no value is provided then one will be selected randomly.
 * @returns {string}
 */
const changeCase = (text, format) => {
    const formatMap = {
        random: Math.random() >= 0.5 ? 'toUpperCase' : 'toLowerCase',
        uppercase: 'toUpperCase',
        lowercase: 'toLowerCase'
    }

    const key = format || 'random'
    const method = formatMap[key]
    return text[method]()
}

console.log(changeCase('josh', 'uppercase'))
console.log(changeCase('HELLO', 'lowercase'))




const subtractHandler = () => {
    const newValue = parseInt(elements.number.value) - STEP_AMOUNT
    elements.number.value = newValue

    if (newValue <= MIN_NUMBER) {
        elements.subtract.disabled = true
    
    }

    if (elements.add.disabled === true) {
        elements.add.disabled = false
    }

    updateColor()

}
const addHandler = () => {
    const newValue = parseInt(elements.number.value) + STEP_AMOUNT
    elements.number.value = newValue

    if (newValue >= MAX_NUMBER) {
        elements.add.disabled = true
    
    }

    if (elements.subtract.disabled === true) {
        elements.subtract.disabled = false
    }

    updateColor()

}

elements.subtract.addEventListener('click', subtractHandler)
elements.add.addEventListener('click', addHandler)

updateColor()
