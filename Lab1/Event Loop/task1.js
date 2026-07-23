const f1 = () => {
    console.log("f1 starts");
    f2();
    console.log("f1 running");
    console.log("f1 end");
};
const f2 = () => {
    console.log("f2 starts");
    f3();
    console.log("f2 running");
    console.log("f2 end");
}
const f3 = () => {
    console.log("f3 starts");
    console.log("f3 running");
    console.log("f3 end");
}
function main() {
    console.log("main");
    f1();
    console.log("end main");
}
main();

//JavaScript is synchronous and single threaded. It executes code in a top-down manner, meaning that it will execute one function at a time, and it will not move on to the next function until the current one has finished executing.

//In asynchronous we use event loop to manage the call stack 

//Asynchronous using times
//1. set TimeOut
//2. set Immediate
//3. process.next Tick
//4. set Interval
