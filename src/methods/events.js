const events = require('events');
var eventEmitter = new events.EventEmitter();


eventEmitter.on("watch",function(name){

    console.log(name,"is watching");

});



eventEmitter.emit("watch","petter");