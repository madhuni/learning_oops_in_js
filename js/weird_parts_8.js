/* Creting Objects through Pure Prototpal Inheritance */

/* Using the polyfills if the engine does not have the feature of Object.create()*/
if(!Object.create) {
    Object.create = function(o) {
        if(arguments.length > 1) {
            throw new Error("there is an error");
        }
        
        function F() {};
        F.prototype = o;
        
        return new F();
    };
}

var person = {
    firstname: 'Default',
    lastname: 'Default',
    greeting: function() {
        return 'Hello ' + this.firstname;
    }
};

var kanu = Object.create(person);
/* Her 'person' object passed into the Object.create() method, becomes the prototype of the all the 
    newly created objects by the 'Object.create(person)' method.
*/

kanu.firstname = 'Kanishka';
kanu.lastname = 'Madhuni';

var jitu = Object.create(person);

jitu.firstname = 'Jitendra';
jitu.lastname = 'Gangwar';

// I can add different properties and methods later in my prototype and this will reflact to all the
// objects created using the same 'person' object.

person.formalNameWithCompany = function(company) {
    return 'Hi ' + this.lastname + ', ' + this.firstname + '. You works in ' + company + ' Great !!!';
};

