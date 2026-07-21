import { EventEmitter } from "node:events";

const task = new EventEmitter() ;

const sayHi = (name) =>{
    console.log(`loggedin ${name}`);
};

task.once('greet',()=>{
    console.log("System Started...");
})

task.on('greet',sayHi)

task.on('greet',()=>{
    console.log("logged Out");
});

task.once("exit", (name) => {
    console.log(`system is shutting down by ${name}`);
});
task.emit('greet','Arpit Agnihotri');
console.log();
task.emit('greet','arpit');
console.log();
task.off('greet',sayHi);  // remove the listener sayHi
task.emit('greet','arpit agnihotri');  //
console.log();
task.emit("exit",'Manager');   // execute only once
task.emit("exit",'Employee');  //won't affect
task.emit('greet','Manager');