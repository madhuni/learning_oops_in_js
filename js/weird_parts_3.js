/*var greeting = function(whatToSay) {
    return function(name) {
        name = name || "Kanishka"
        console.log(whatToSay + " " + name);
    }
};

var returnValue = greeting("Namaskar!");
console.log(returnValue);

returnValue("Ram");*/



/********** Understanding Closure in Deep ***********/

/*
var buildFunctions = function () {

    var arr = [];

    for (var i = 0; i < 3; i++) {

        arr.push(
            function () {
                console.log(i);
            });
    }

    return arr;

};

var fs = buildFunctions();

console.log(fs);

fs[0]();
fs[1]();
fs[2]();
*/

var buildFunctions = function () {

    var arr = [];

    for (var i = 0; i < 3; i++) {

        arr.push(
            (function(j) {
                return function() {
                    console.log(j);
                }
            }(i))
        );

    }
    
    return arr;
};

var fs = buildFunctions();

console.log(fs);

fs[0]();
fs[1]();
fs[2]();


/**** Closures and Callbacks ******/

function sayHello() {
    var greetings = "Hello";
    
    setTimeout(function() { // here this function is the 'call back function' for the setTimeout
        console.log(greetings);
    }, 3000);
}

sayHello();

function myGreeings() {
    console.log("Hello Kanishka Mohan Madhuni");
}

myGreeings();


/*** sampel call back function ***/
function sampleCallback(callback) {
    
    callback();
    console.log("Let me check am I running first or last");
    console.log("Ohh...I am running later and later and later :()");
}

sampleCallback(function() {
    console.log("First call back function");
});

/*sampleCallback(function() {
    console.log("Second call back function");
});*/
