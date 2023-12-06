//! we can generate events like this but
//* Actual Events generally take place in the servers. These generated events represent the actual Events
const EventEmitter = require('events')

const customEmitter = new EventEmitter()

// customEmitter.emit('response') //* Emits the response before even listening to any events

customEmitter.on('response', (name, id) => { //* Listens the Event
  console.log(`Data Recieved from ${name}, with id as ${id}`)
})

// customEmitter.emit('response') //* Emits the response after listening only 1 event

customEmitter.on('response', () => { //* Listens the Evnet
  console.log("clicked a button")
})

customEmitter.emit('response', 'Ganesh', 121) //* Emits the response after listening all the events