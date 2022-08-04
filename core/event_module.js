const EventEmitter = require('events');


// Create class
class MyEmitter extends EventEmitter {}

// Init class object
const myEmitter = new MyEmitter();


// Create event listener
// * Anytime you emit an event this is going to run
myEmitter.on('event', () => console.log('Event Fired!'))

// Init event
myEmitter.emit('event')
myEmitter.emit('event')
myEmitter.emit('event')
myEmitter.emit('event')
myEmitter.emit('event')
myEmitter.emit('event')