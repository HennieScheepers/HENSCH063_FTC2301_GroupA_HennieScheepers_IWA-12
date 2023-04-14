// scripts.js

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

const book_1 = {
    status : document.querySelector('#book1 > p > .status'),
    reserve : document.querySelector('#book1 > .reserve'),
    checkout : document.querySelector('#book1 > .checkout'),
    checkin : document.querySelector('#book1 > .checkin'),
}

const book_2 = {
    status : document.querySelector('#book2 > p > .status'),
    reserve : document.querySelector('#book2 > .reserve'),
    checkout : document.querySelector('#book2 > .checkout'),
    checkin : document.querySelector('#book2 > .checkin')
}
const book_3 = {
    status : document.querySelector('#book3 > p > .status'),
    reserve : document.querySelector('#book3 > .reserve'),
    checkout : document.querySelector('#book3 > .checkout'),
    checkin : document.querySelector('#book3 > .checkin')
}


book_1.checkin.color = ''
book_1.status.style.color = STATUS_MAP.overdue.color
book_1.reserve.disabled = STATUS_MAP.overdue.canReserve ? '': 'disabled'
book_1.checkout.disabled = STATUS_MAP.overdue.canCheckout ? '' : 'disabled'
book_1.checkin.disabled = STATUS_MAP.overdue.canCheckIn ? '' : 'disabled'

book_2.checkin.color =''
book_2.status.style.color = STATUS_MAP.reserved.color
book_2.reserve.disabled = STATUS_MAP.reserved.canReserve ? '' : 'disabled'
book_2.checkout.disabled = STATUS_MAP.reserved.canCheckout ? '' : 'disabled'
book_2.checkin.disabled = STATUS_MAP.reserved.canCheckIn ? '' : 'disabled'

book_3.checkin.color = ''
book_3.status.style.color = STATUS_MAP.shelf.color
book_3.reserve.disabled = STATUS_MAP.shelf.canReserve ? '' : 'disabled'
book_3.checkout.disabled = STATUS_MAP.shelf.canCheckout ? '' : 'disabled'
book_3.checkin.disabled = STATUS_MAP.shelf.canCheckIn ? '' : 'disabled'