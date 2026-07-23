import fs from "fs/promises";

const writeData = async () => {
    try {
        console.log("about to write....");
        await fs.writeFile('stud.txt', "Name: Arpit Agnihotri");
        console.log("file written");  
    } catch (error) {
        console.log("Error writing file: ", error);  
    }
}


const f1 = () => {
    console.log("f1 start");
    console.log("f1 running");
    console.log("f1 end");
};

const f2 = () => {
    console.log("f2 start");
    console.log("f2 running");
    console.log("f2 end");
};

const f3 = () => {
    console.log("f3 start");
    console.log("f3 running");
    console.log("f3 end");
};

const main = () => {
    console.log("main start");
   setTimeout(f1, 0);
   //setInterval(f2, 1000);
   setImmediate(f2);
   process.nextTick(f3);
   writeData();
   console.log("main end");
};
main();