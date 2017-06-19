define(function(require, exports, module) {

    var $ = require('jquery');

    var Box = function() {
        this.init();
    };

    Box.prototype = {

        init: function() {
            this.bindEvent();
        },

        bindEvent: function() {
            var context = this;

            $('.box').on('click', function() {
                context.say();
            });
        },

        say: function() {
            console.log('box is here.');
        }
    };

    module.exports = Box;
});
