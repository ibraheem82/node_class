// const persons = require("uuid");

// const person = {
//   name: "Ibraheem Omikunle",
//   age: 20,
// };
class Person{
    constructor(name, age){
        this.name = name;
        this.age  = age
    }

    greeting(){
        console.log(`My name is ${this.name} and I am ${this.age}`);
    }
}
// module.exports = person;
module.exports = Person;
