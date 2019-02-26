// Object Destructuring Syntax

const person = {
  name: 'yugesh',
  branch: 'CSE',
  location: {
    country: 'IND',
    temp: '35'
  }
}

const {name, branch} = person;
//Renaming and Assigning Default Value
const {country, temp: temparature = 25} = person.location;

console.log(`Hello Mr.${name}, You'r Branch Is ${branch}`);
console.log(`It's ${temparature} degrees in ${country}`);
