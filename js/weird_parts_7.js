/* Using function constructor in JS */


/* As the below function is constructing an Object, we use to call it as
    'Function Constructor'
*/

function Person(firstname, lastname) {
/* JS engine knows, that this function was invoked using the 'new' operator, 
it will automatically ponin the 'this' to that newly created object
*/
    console.log(this); // here this will point to the newly created object by the operator 'new'
    this.firstname = firstname;
    this.lastname = lastname;
/* in the end of function execution, JS engine will return the object with the 
properties which was constructed above.
*/
}

Person.prototype.getFullName = function() {
    return this.firstname + " " + this.lastname;
};

Person.prototype.greeting = function() {
    return 'Hello' + ' ' + this.firstname + ' Good morning !!!!'
}

var person1 = new Person("Kanishka", "Madhuni");
var person2 = new Person("Sapna", "Agarwal");
// 'new' operator first creats an empty object then runs the 'Person' function

console.log(person1);


/***** Array Dangerous Aside !!! *****/

Array.prototype.customProperty = 'cool !!!';
/* if somebody has added the custom property in prototype Object then using the 'for in' loop
    will reflect the prototype property as well
    
    So always use the standard for loop for accessing the elements of the array.
*/

var arr = ['Kanishka', 'Mohan', 'Madhuni', 'Jitendra', 'Gangwar'];

for(var prop in arr) {
    if(arr.hasOwnProperty(prop)) { // we will need to check if the property is its own property
        console.log(prop + ' : ' + arr[prop]);
    }
}

