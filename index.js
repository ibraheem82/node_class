// const person = require('./person');
// const Person = require('./person');

// const person1 = new Person('John Doe', 30);

// person1.greeting();

// console.log(person.name);


const Logger = require('./logger.js');
const logger =  new Logger();
logger.on('message', data => console.log('Called Listener', data));

// * Calling the log() method
logger.log('Ibraheem Omikunle');
logger.log('Ibrahe');
logger.log('mikunle');
logger.log('Ibrmikunle');