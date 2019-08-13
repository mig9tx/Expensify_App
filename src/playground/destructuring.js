// console.log('destructuring');

// const person = {
//     name: 'Miguel',
//     age: 40,
//     location: {
//         city: 'Houston',
//         temp: 102
//     }
// };

// const {name = 'anonymous', age} = person;
// // const name = person.name;
// // const age = person.age;

// console.log(`${name} is ${age}`);


// const { city, temp: temperature } = person.location;

// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//     title: 'Infinity War',
//     author: 'Stan Lee',
//     publisher: {
//         name: 'Marvel Comics'
//     }
// };

// const { name: publisherName = 'Self-Published'}  = book.publisher;

// console.log(publisherName); 

// const address = ['1299 S Juniper Street', 'Spring', 'Texas', '19280'];

// const [, city, state = Wyoming] = address;

// console.log(`You are in ${city}, ${state}.`);

const item = ['coffee', '$2.00', '$2.50', '$2.75'];

const [itemName, small , medium, large] = item;

console.log(`A medium ${itemName} costs ${medium}`);






