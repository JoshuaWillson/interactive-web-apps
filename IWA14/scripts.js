// IWA_14 Challenge 1

firstName = 'John';
age = 35;
hobby = 'Coding';

const logTwice = (parameter) => {
  console.log(parameter)
  console.log(parameter)
}

const toLog = () => {
  logTwice(`Hello, ${firstName} (${age}). I love ${hobby}!`)
}

toLog()

// IWA_14 Challenge 2

function add(a, b) { return a + b }

function multiply(added, c) { return added * c }

function internal() {
	const added = this.add(this.internal.a, this.internal.b)
	const sum = this.multiply(added, this.internal.c)
	return console.log(sum)
}

// Not allowed to change below this

const example1 = {
	internal: {
		a: 2,
		b: 4,
		c: 8,
	},
	add,
	multiply,
  calculate: internal
}

const example2 = {
	internal: {
		a: 2,
		b: 2,
		c: 3,
	},
	add,
	multiply,
  calculate: internal
}

example1.calculate()
example2.calculate()