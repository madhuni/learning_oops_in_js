/**** 'call()', 'apply()' and 'bind()' methods in  JS ****/


                    /***** Using the 'bind' method *****/
var person = {
    firstname: "Kanishka",
    lastname: "Madhuni",
    getFullName: function() {
        var fullname = this.firstname + " " + this.lastname;
        return fullname;
    }
};

var logName = function(lang1, lang2) {
    console.log("Logged: " + this.getFullName());
    console.log("Arguments are : " + lang1 + " & " + lang2);
    /* Here in this funciton 'this' will point to the Global Object not the 'person'
    object. So Javascript gives us the feature to set 'this' in 'logName' function to
    point 'person' object. This method is called the 'bind()' method which every funtion
    object can access.
    */
};

var logPersonName = logName.bind(person);

/* The 'bind' method doesn't inovke the function. It just make another copy of the function 'logName' and will point the 'this' keyword to reference the 'person' object 
which is passed as parameter into the 'bind' method. */

logPersonName('english', 'hindi');

/* I can directly do this by using the below code : 

var logName = function() {
    console.log("Logged: " + this.getFullName());
}.bind(person);

*/


                    /**** Using the 'call' method *****/
/* as the 'bind' method copy the function, 'call' method doesn't copy the function.
Instead it use to invoke the function by setting the 'this' to point to the passed 
object as parameter into the 'call' method.
*/

logName.call(person, 'bojhpuri', 'tamil');


                    /**** Using the 'apply' mthod ****/
/* 'apply' method almost similar to the 'call' method but unlike 'call' method 
it accepts the array of the arguments 
*/

logName.apply(person, ['kannada', 'telugu']);



                    /* Function borrowing */
// we can do it if we have another function with same property name but different data

var person2 = {
    firstname: 'Sapna',
    lastname: 'Agarwal'
};

var secondFullName = person.getFullName.apply(person2);
console.log(secondFullName);

                    /* Function Currying */
// we can set predefine the permanent value of the parameter when calling the function

function multiply(a,b) {
    return a*b;
}

var multiplyByTwo = multiply.bind(this, 2); //  here '2' is the value of parameter 'b' which we have defined
console.log(multiplyByTwo(50));