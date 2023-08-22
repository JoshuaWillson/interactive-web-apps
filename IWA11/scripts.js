const roots = {
    root1: {
        dataKey: document.querySelector('[data-key="order1"]'),
        biscuits: document.querySelector('[data-key="order1"] .biscuits .count'),
        donuts: document.querySelector('[data-key="order1"] .donuts .count'),
        pancakes: document.querySelector('[data-key="order1"] .pancakes .count'),
        status: document.querySelector('[data-key="order1"] .status dd'),
    },
    root2: {
        dataKey: document.querySelector('[data-key="order2"]'),
        biscuits: document.querySelector('[data-key="order2"] .biscuits .count'),
        donuts: document.querySelector('[data-key="order2"] .donuts .count'),
        pancakes: document.querySelector('[data-key="order2"] .pancakes .count'),
        status: document.querySelector('[data-key="order2"] .status dd'),
    },
    root3: {
        dataKey: document.querySelector('[data-key="order3"]'),
        biscuits: document.querySelector('[data-key="order3"] .biscuits .count'),
        donuts: document.querySelector('[data-key="order3"] .donuts .count'),
        pancakes: document.querySelector('[data-key="order3"] .pancakes .count'),
        status: document.querySelector('[data-key="order3"] .status dd'),
    },
}

roots.root1.biscuits.innerHTML = roots.root1.dataKey.getAttribute('data-biscuits')
roots.root1.donuts.innerHTML = roots.root1.dataKey.getAttribute('data-donuts')
roots.root1.pancakes.innerHTML = roots.root1.dataKey.getAttribute('data-pancakes')
roots.root1.status.innerHTML = roots.root1.dataKey.getAttribute('data-delivered') === "true" ? 'Delivered' : 'Pending'

roots.root2.biscuits.innerHTML = roots.root2.dataKey.getAttribute('data-biscuits')
roots.root2.donuts.innerHTML = roots.root2.dataKey.getAttribute('data-donuts')
roots.root2.pancakes.innerHTML = roots.root2.dataKey.getAttribute('data-pancakes')
roots.root2.status.innerHTML = roots.root2.dataKey.getAttribute('data-delivered') === "true" ? 'Delivered' : 'Pending'

roots.root3.biscuits.innerHTML = roots.root3.dataKey.getAttribute('data-biscuits')
roots.root3.donuts.innerHTML = roots.root3.dataKey.getAttribute('data-donuts')
roots.root3.pancakes.innerHTML = roots.root3.dataKey.getAttribute('data-pancakes')
roots.root3.status.innerHTML = roots.root3.dataKey.getAttribute('data-delivered') === "true" ? 'Delivered' : 'Pending'