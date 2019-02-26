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

// Array Destructuring Syntax

const item = ['Coffee(hot)', '$2.00', '$2.50', '$3.00']
// Assigning Default Value for undefined index
const [itemName, ,mediumPrice,,location="USA"] = item;

console.log(`A Medium ${itemName} costs ${mediumPrice} In ${location}`);

// Array Spread Operator

let names = ['Yugesh', 'Palvai', 'John']
console.log(names);
let new_names = [...names,'Doe']
console.log(new_names);
let another_set = ['Mike',...new_names,'Max'];
console.log(another_set);


// Object Spread Operator
let user = { name: 'yugesh', branch: 'cse'}
console.log(person);

let details = {...user, location: 'IND'}
console.log(details);

let modified_details = {...details, name: 'Palvai', location: 'Ind'};
console.log(modified_details);
