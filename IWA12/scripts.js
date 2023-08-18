const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 

const status0 = document.querySelector('#book1 .status')
const reserve0 = document.querySelector('#book1 .reserve')
const checkout0 = document.querySelector('#book1 .checkout')
const checkin0 = document.querySelector('#book1 .checkin')

const status1 = document.querySelector('#book2 .status')
const reserve1 = document.querySelector('#book2 .reserve')
const checkout1 = document.querySelector('#book2 .checkout')
const checkin1 = document.querySelector('#book2 .checkin')

const status2 = document.querySelector('#book3 .status')
const reserve2 = document.querySelector('#book3 .reserve')
const checkout2 = document.querySelector('#book3 .checkout')
const checkin2 = document.querySelector('#book3 .checkin')

checkin0.style.color = ''
if(status0.innerHTML === 'shelf') {
    status0.style.color = STATUS_MAP.shelf.color

    STATUS_MAP.shelf.canReserve ? reserve0.enabled = true : reserve0.disabled = true
    STATUS_MAP.shelf.canCheckout ? checkout0.enabled = true : checkout0.disabled = true
    STATUS_MAP.shelf.canCheckIn ? checkin0.enabled = true : checkin0.disabled = true
} 
if(status0.innerHTML === 'reserved') {
    status0.style.color = STATUS_MAP.reserved.color

    STATUS_MAP.reserved.canReserve ? reserve0.enabled = true : reserve0.disabled = true
    STATUS_MAP.reserved.canCheckout ? checkout0.enabled = true : checkout0.disabled = true
    STATUS_MAP.reserved.canCheckIn ? checkin0.enabled = true : checkin0.disabled = true
}
if(status0.innerHTML === 'overdue') {
    status0.style.color = STATUS_MAP.overdue.color

    STATUS_MAP.overdue.canReserve ? reserve0.enabled = true : reserve0.disabled = true
    STATUS_MAP.overdue.canCheckout ? checkout0.enabled = true : checkout0.disabled = true
    STATUS_MAP.overdue.canCheckIn ? checkin0.enabled = true: checkin0.disabled = true
}
if(status0.innerHTML === 'checkedOut') {
    status0.style.color = STATUS_MAP.checkedOut.color

    STATUS_MAP.checkedOut.canReserve ? reserve0.enabled = true : reserve0.disabled = true
    STATUS_MAP.checkedOut.canCheckout ? checkout0.enabled = true : checkout0.disabled = true
    STATUS_MAP.checkedOut.canCheckIn ? checkin0.enabled = true : checkin0.disabled = true
}

checkin1.style.color = ''
if(status1.innerHTML === 'shelf') {
    status1.style.color = STATUS_MAP.shelf.color

    STATUS_MAP.shelf.canReserve ? reserve1.enabled = true : reserve1.disabled = true
    STATUS_MAP.shelf.canCheckout ? checkout1.enabled = true : checkout1.disabled = true
    STATUS_MAP.shelf.canCheckIn ? checkin1.enabled = true : checkin1.disabled = true
} 
if(status1.innerHTML === 'reserved') {
    status1.style.color = STATUS_MAP.reserved.color

    STATUS_MAP.reserved.canReserve ? reserve1.enabled = true : reserve1.disabled = true
    STATUS_MAP.reserved.canCheckout ? checkout1.enabled = true : checkout1.disabled = true
    STATUS_MAP.reserved.canCheckIn ? checkin1.enabled = true : checkin1.disabled = true
}
if(status1.innerHTML === 'overdue') {
    status1.style.color = STATUS_MAP.overdue.color

    STATUS_MAP.overdue.canReserve ? reserve1.enabled = true : reserve1.disabled = true
    STATUS_MAP.overdue.canCheckout ? checkout1.enabled = true : checkout1.disabled = true
    STATUS_MAP.overdue.canCheckIn ? checkin1.enabled = true : checkin1.disabled = true
}
if(status1.innerHTML === 'checkedOut') {
    status1.style.color = STATUS_MAP.checkedOut.color

    STATUS_MAP.checkedOut.canReserve ? reserve1.enabled = true : reserve1.disabled = true
    STATUS_MAP.checkedOut.canCheckout ? checkout1.enabled = true : checkout1.disabled = true
    STATUS_MAP.checkedOut.canCheckIn ? checkin1.enabled = true : checkin1.disabled = true
}

checkin2.style.color = ''
if(status2.innerHTML === 'shelf') {
    status2.style.color = STATUS_MAP.shelf.color

    STATUS_MAP.shelf.canReserve ? reserve2.enabled = true : reserve2.disabled = true
    STATUS_MAP.shelf.canCheckout ? checkout2.enabled = true : checkout2.disabled = true
    STATUS_MAP.shelf.canCheckIn ? checkin2.enabled = true : checkin2.disabled = true
} 
if(status2.innerHTML === 'reserved') {
    status2.style.color = STATUS_MAP.reserved.color

    STATUS_MAP.reserved.canReserve ? reserve2.enabled = true : reserve2.disabled = true
    STATUS_MAP.reserved.canCheckout ? checkout2.enabled = true : checkout2.disabled = true
    STATUS_MAP.reserved.canCheckIn ? checkin2.enabled = true : checkin2.disabled = true
}
if(status2.innerHTML === 'overdue') {
    status0.style.color = STATUS_MAP.overdue.color

    STATUS_MAP.overdue.canReserve ? reserve2.enabled = true : reserve2.disabled = true
    STATUS_MAP.overdue.canCheckout ? checkout2.enabled = true : checkout2.disabled = true
    STATUS_MAP.overdue.canCheckIn ? checkin2.enabled = true : checkin2.disabled = true
}
if(status2.innerHTML === 'checkedOut') {
    status2.style.color = STATUS_MAP.checkedOut.color

    STATUS_MAP.checkedOut.canReserve ? reserve2.enabled = true : reserve2.disabled = true
    STATUS_MAP.checkedOut.canCheckout ? checkout2.enabled = true : checkout2.disabled = true
    STATUS_MAP.checkedOut.canCheckIn ? checkin2.enabled = true : checkin2.disabled = true
}