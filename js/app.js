"use strict";

// var num = [10,20,30,40,50];

// var [first, seccond, third, fourth, fifth] = num;

// //console.log(fifth);


// function arrayDest([firts, second, ...rest]){
// //     console.log(firts);
// //     console.log(seccond)
// //     console.log(...rest)
// }

// arrayDest(num);


// var num_nested = [10, 20, [30, 40, 50]];

// var [f,s,[t,,f]] = num_nested;

// //console.log(num_nested)
// console.log(...num_nested)


var course = {
    name:"Rob",
    lession: "es6",
    etc: "more..."
};

function courseDetails(c){
    let { name, lession, etc } = c;
    console.log(name + " " + lession + " " + etc)
}

// function courseDetails(c){
//     var name = c.name;
//     var lession = c.lession;
//     var etc = c.etc;
//     console.log(name + " " + lession + " " + etc)
// }
//courseDetails(course);


function* msg(){
    yield "ciao";
    yield "test";
    yield "pippo";
}

let message = msg();
for (let word in message)
    console.log(word) 


let out = message.next().value;
console.log(out)

let nextOut = message.next().value;
console.log(nextOut)

let nexttt = message.next().value;
console.log(nexttt)
