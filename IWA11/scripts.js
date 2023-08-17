const root1 = document.querySelector('[data-key="order1"]')
let biscuits1 = document.querySelector('[data-key="order1"] .biscuits .count')
let donuts1 = document.querySelector('[data-key="order1"] .donuts .count')
let pancakes1 = document.querySelector('[data-key="order1"] .pancakes .count')
let status1 = document.querySelector('[data-key="order1"] .status dd')

const root2 = document.querySelector('[data-key="order2"]')
let biscuits2 = document.querySelector('[data-key="order2"] .biscuits .count')
let donuts2 = document.querySelector('[data-key="order2"] .donuts .count')
let pancakes2 = document.querySelector('[data-key="order2"] .pancakes .count')
let status2 = document.querySelector('[data-key="order2"] .status dd')

const root3 = document.querySelector('[data-key="order3"]')
let biscuits3 = document.querySelector('[data-key="order3"] .biscuits .count')
let donuts3 = document.querySelector('[data-key="order3"] .donuts .count')
let pancakes3 = document.querySelector('[data-key="order3"] .pancakes .count')
let status3 = document.querySelector('[data-key="order3"] .status dd')

biscuits1.innerHTML = root1.getAttribute('data-biscuits')
donuts1.innerHTML = root1.getAttribute('data-donuts')
pancakes1.innerHTML = root1.getAttribute('data-pancakes')
status1.innerHTML = root1.getAttribute('data-delivered') === "true" ? 'Delivered' : 'Pending'

biscuits2.innerHTML = root2.getAttribute('data-biscuits')
donuts2.innerHTML = root2.getAttribute('data-donuts')
pancakes2.innerHTML = root2.getAttribute('data-pancakes')
status2.innerHTML = root2.getAttribute('data-delivered') === "true" ? 'Delivered' : 'Pending'

biscuits3.innerHTML = root3.getAttribute('data-biscuits')
donuts3.innerHTML = root3.getAttribute('data-donuts')
pancakes3.innerHTML = root3.getAttribute('data-pancakes')
status3.innerHTML = root3.getAttribute('data-delivered') === "true" ? 'Delivered' : 'Pending'