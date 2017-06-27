/*** Understanding PROTOYPES and PROTYPAL Inheritence in JAVASCRIPT ****/
//"use strict";

var person1 = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function() {
        return this.firstname + " " + this.lastname;
    }
};

//console.log(person3);

var person2 = {
    firstname: 'John',
    lastname: 'Doe'
};

var person3 = {
    firstname: 'Kanishka'
};
/* here we are setting the 'proto' of person2/person3 to the object 'person1' 
i.e.: person1 will act as the prototype of the person2/person3
*/
//person2.__proto__ = person1;
//person3.__proto__ = person1;

//console.log(person3.getFullName());
//console.log(person2.getFullName());


/***** Everything is an Object or a Primitive in Javascript *****/
var a = {};
var b = [];
var c = function() { };

/***** Reflection and Extend in Javascript *****/

for(var prop in person2) {
    if(person2.hasOwnProperty(prop)) {
        console.log(prop + ":" + person2[prop]);   
    }
}

console.log(person2.hasOwnProperty(prop));

(function(arg1) {
    console.log(arguments);
}("kanishka", "mohan", "madhuni"));



/***** writing some code from Underscore.js *****/

var checkObject = function(obj) {
    var type = typeof obj;
    if(type === 'function' || type === 'object') {
        return type;
    }
};

var getKeys = function(obj) {
    if(!checkObject(obj)) {
        return [];
    }
    var keys = [];
    for(var prop in obj) {
        keys.push(prop);
    }
    
    return keys;
};

var createAssigner = function(keyFunc, undefinedOnly) {
    return function(obj) {
        var argLength = arguments.length;
        console.log("Hi, there are "+ argLength + ' arguments passed in the function');
        if(argLength < 2 || obj == null) {
            return obj;
        }
//        console.log(arguments);
        for(var i=1; i<arguments.length; i++) {
            var source = arguments[i],
                keys = keyFunc(source),
                l = keys.length;
//            console.log(source);
//            console.log(keys);
            for(var j=0; j<l; i++){
                var key = keys[j];
                obj[key] = source[key];
            }
//            console.log(obj);
        }
        return obj;
    };
};

var extend = createAssigner(getKeys);

/********************** End of required functions ***********************/

var obj1 = {
    address: 'Moradabad, Uttar Pradesh',
    country: 'India',
    getFormalName: function() {
        return this.lastname + ' ' + this.firstname;
    }
};

var obj2 = {
    fakeName: 'yeah it is the fake name'
};

var obj3 = {
    greetings: "Hello, I am working for the 'extend' function!!!",
    greet: 'Good Morning'
};

extend(person2, obj1);

console.log(person2);
//console.log(person2.getFormalName.call(person3));
//console.log(person2.getFullName());
//console.log(person2.greetings);
//console.log(person2.great);
// extend(person1, person2);
//console.log(getKeys(person1));
//console.log(typeof person1);
//console.log(checkObject(person1.getFullName));

