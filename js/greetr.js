/* Greetr library for Greetings !!! */

(function (global, $) {

    var Greetr = function (firstName, lastName, language) {

        return new Greetr.init(firstName, lastName, language);

    };

    var lang = ['english', 'hindi'];

    Greetr.prototype = {

        greet: function () {

            console.log('Hello ! ' + this.firstName);
            return this;
        },

        formalGreeting: function () {

            console.log('Good morning Mr. ' + this.firstName + ' ' + this.lastName);

            return this;
        }
    };

    Greetr.init = function (firstName, lastName, language) {
        var self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';
    };

    Greetr.init.prototype = Greetr.prototype;

    window.Greetr = window.G$ = Greetr;

})(window, jQuery);