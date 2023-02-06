'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
const weekdays=['mon','tue','wed','thu','fri','sat','sun']
// Data needed for first part of the section
const openingHours= {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
[weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //enhanced object literals
  openingHours
  
};



// console.log(restaurant)

// const menu=[...restaurant.starterMenu, ...restaurant.mainMenu]
// console.log(menu)

// for(const item of menu)
// console.log(item)

// console.log(menu.entries())
// for(const [i,el] of menu.entries()){
//   console.log(`${i+1}: ${el}`)
// }


// console.log(restaurant.openingHours.mon.open)


//with optional chaining

// console.log(restaurant.openingHours.mon?.open)//if(restaurant.openingHours.mon && restaurant.openingHours.mon.open) equivalent

const days=['mon','tue','wed','thu','fri','sat','sun']

// for(const day of days){
//   console.log(day)
//   const an = restaurant.openingHours[day]?.open ?? 'closed'
//   console.log(`on ${day} we are ${an}`)

// }


const properties=Object.keys(openingHours)//returns keys of a objects
const a =properties.length
console.log(`We are open for ${a} days`)
for(const day of Object.keys(openingHours)){
  console.log(day)
}

const values=Object.values(openingHours)
// console.log(values)

const entries=Object.entries(openingHours)
// console.log(entries)

for(const [key,{open,close}] of entries){
  console.log(`We open on ${key} at ${open} and close at ${close}`)
}

//sets-collection of unique values
const ordersSet=new Set(['Pasta','Pizza','Risotto','Pasta','Pizza'])
console.log(ordersSet)
console.log(new Set('Jonas'))
console.log(ordersSet.size)
console.log(ordersSet.has('Pizza'))
console.log(ordersSet.has('Bread'))
ordersSet.add('Garlic Bread')
ordersSet.delete('Risotto')
console.log(ordersSet)

for(const order of ordersSet)
console.log(order)

//Example
const staff=['Waiter','Chef','Waiter','Manager','Chef','Waiter']
const staffUnique=[new Set(staff)]
console.log("StaffUnique" + " " + staffUnique)

const rest=new Map()
rest.set('name','Classico Italiano');
rest.set(1,'Firenze,Italy')
console.log(rest.set(2,'Lisbon,Portugal'))
rest.set('categories',['Italian','Chinsese']).set('open',11)

console.log(rest.get(1))

const time=21

console.log(rest.has('categories'))
rest.delete(2)
console.log(rest)

const arr=[1,2]
rest.set(arr,'Test')
console.log(rest.get(arr))

// const question=new Map([['question','What is the best programming in the world'],[1,'Java'],[2,'Java'],[3,'Javascript']
// ['correct',3],[true,'Correct'],[false,'Try again']])

const airline='TAP Air Portugal'
const plane='A320'
console.log(plane[0])
console.log(plane[1])
console.log(plane[2])
console.log(airline.length)
console.log(airline.indexOf('r'))
console.log(airline.lastIndexOf('r'))
console.log(airline.indexOf('Portugal'))

console.log(airline.slice(4))
console.log(airline.slice(4,7))

console.log(airline.slice(0,airline.indexOf(' ')))
console.log(airline.slice(airline.lastIndexOf(' ')+1))

console.log(airline.slice(-2))
console.log(airline.slice(1,-1))

const checkMiddleSeat=function(seat){
  //B and E are middle seats
  const s=seat.slice(-1)
}
checkMiddleSeat('11B')
console.log(airline.toLowerCase())

const passenger='jOnAS'
const passengerLower=passenger.toLowerCase()
const passengerCorrect=passengerLower[0].toUpperCase() + passengerLower.slice(1)
console.log(passengerCorrect)

//Comparing email
const email='hello@jonas.io'
const loginEmail='  Hello@Jonas.Io \n'

const lowerEmail=loginEmail.toLowerCase()
const trimmedEmail=lowerEmail.trim()
console.log(trimmedEmail)

//replacing
const priceGB='288,97@'
const priceUS=priceGB.replace('@','$').replace(',','.')
console.log(priceUS)

const announcement='All passengers come to boarding door 23, Boarding door 23'
console.log(announcement.replaceAll('door','gate'))

//Boolean
const plane1='A32neo'
console.log(plane.includes('A32'))
console.log(plane.startsWith('A'))

// const checkBaggage=function(items){
//   const baggage=items.toLowerCase()
//   if(baggage.includes('knife') || baggage.includes('gun'))

// }

// checkBaggage('I have a laptop,some food and a pocket knife')

console.log('a+very+nice+string'.split('+'))
console.log('Jonas Schedmann'.split(' '))
const [firstName,lastName]='Jonas Schedmann'.split(' ')
console.log(['Mr.', firstName].join(' '))


const pass='jessica ann smith davis'
const names= pass.split(' ')
const upper=[]
for(const n of names){
  upper.push(n[0].toUpperCase() + n.slice(1))
}

const message='Go to gate 23'
console.log(message.padStart(25,'+'))
console.log('Jonas'.padStart(25,'+').padEnd(30,'+'))

const maskCreditCard=function(number){
  const str=number + ' '
  const last=str.slice(-5)
  return last.padStart(str.length,'*')

}

const message2='Bad weather..'
console.log(message2.repeat(5))

console.log(maskCreditCard(433099888))

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'))

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  const a=[];
  const b=''
  for(const row of rows){
    console.log(row)
    const [c,d]=row.split('_')
    console.log(c,d)
    const e1=d[0].toUpperCase()+d.slice(1)
    a.push(c+e1)

  }
  console.log(a)
  
})


