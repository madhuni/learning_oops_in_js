/*
We are basically going to discuss about three fundamental ideas:
    Syntax Parcers
    Execution Context and 
    Lexical Environments (Scoping)
*/
/*
function b() {
    console.log(myvar);
}

var myvar =1;
a();
function a(){
    var myvar = 2;
    b();
}
*/

// ******Learning about the Event Queue and the Async behaviour of javascript (How it manages that) *********

/*function waitFunction() {
    var ms = 3000 + new Date().getTime();
    
    while(new Date() < ms) {
        console.log("The while loop is running here....u will have to wait for this to finish");
    }
    console.log("function executed");
}

function clickHandelar() {
    console.log("click event happend");
}

document.addEventListener('click',clickHandelar);

waitFunction();
console.log("This is Global Context bro");*/

// *********Creating Objects**************
/*var person = new Object();
person.firstName = "Kanishka";
person.lastName = "Madhuni";

person.address = new Object();
person.address.state = "Uttar Pradesh";
person.address.city = "Moradabad";

console.log(person);*/


/**** Learning about Functions in jS*****/
/*function great() {
//    console.log(this); // here "this" is the Window object
    console.log("hi " + great.msg);
}

great.msg = "Hello world...I am function and I am an object :)";

great();
console.log(great.msg);*/

/**** Learning Function, Objects and "this" *****/

/*var obj = {
    name: "kanishka mohan madhuni",
    company: "Cognizant",
    designation: "Programmer analyst",
    display: function() {
        console.log(this.name+" "+"works in "+this.company+" as "+this.designation);
        // here 'this' is pointing to the very next Object i.e. 'obj' Object
        function newFun() {
            console.log(this); // here 'this' is not pointing to the 'obj' Object rather pointing to the Window Obejct (Global Object) {but we think it to be the "obj" object}
        }
        
        newFun();
    }
};*/

// so to avoid this bad thing about javascript we will do one thing
var obj = {
    name: "kanishka mohan madhuni",
    company: "Cognizant",
    designation: "Programmer analyst",
    display: function() {
        var that = this; // now 'that' will point to the 'obj' object and we can use this without worrying about 'this' anymore and the results will be as expected
        /*console.log(that);*/
        console.log(that.name+" "+"works in "+that.company+" as "+that.designation);
        function newFun() {
            console.log(that.name);
        }
        newFun();
    }
};

obj.display();

/**** 'arguments' keyword in Javascript ****/

function checkArg(name, city, lang, ...other) {
    console.log(arguments);
    console.log(other);
    if (arguments.length === 0) {
        console.log("No arguments have been passsed");
    }else {
        console.log("Yeah...I think u have some arguments");
    }
    
    console.log(name + "," + city + "," + lang);
}
checkArg("Kanishka","mbd","hindi","uttar pradesh","india");
//checkArg("kanishka","mbd","hindi");

/*** Immediately Invoked Function Expression (IFEE) ****/

// The function which is invoked just after it's declaration is called an IIFE

var greetings = function(name) {
  
    name = name || "Kanishka"; // setting the default value for name
    var greeting = "Hare Krishna";
    console.log(greeting + " " + name);
    
}("Rohit");

console.log(greetings);

// anything inside the "()", JS engine thinks it as an expression.
// Only expressions can be there inside the "()"
(function(name) {
    name = name || "Kanishka";
    var greeting = "Hare Krishna";
    console.log(greeting + " " + name);
}("Madhuni bhai"));

