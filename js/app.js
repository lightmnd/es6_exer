var num = [10,20,30,40,50];

var [first, seccond, third, fourth, fifth] = num;

//console.log(fifth);


function arrayDest([firts, second, ...rest]){
    console.log(firts);
    console.log(seccond)
    console.log(...rest)
}

arrayDest(num);


var num_dest = [10, 20, 30, 40, 50] 