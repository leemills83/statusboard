define(function (require) {
    var defineComponent = require('flight/component'),
        statusboard = require('mixin/statusboard');

    return defineComponent(clock, statusboard);

    function clock() {

        this.defaultAttrs({});

        
        require(['text!./views/clock.hbs'], function(clockview){
            this.$('.app').html(Handlebars.compile(clockview));
        });

        console.log('clock', this);

        this.doSomething = function() {
            console.log('click');
        }

        this.startclock = function() {
            console.log('here');
        }

        this.after('initialize', function() {
            // this.view(['text!apps/clock/views/clock.hbs'], '.app');
            this.loadcss('apps/clock/css/clock.css');
            this.startclock();
            this.on('click', this.doSomething);
        });
    }
});