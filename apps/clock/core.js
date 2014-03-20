define(function (require) {
    var defineComponent = require('flight/component'),
        statusboard = require('mixin/statusboard');

    return defineComponent(clock, statusboard);

    function clock() {

        this.defaultAttrs({});

        require(['text!./views/clock.hbs'], function(clockview){
            this.$('.app').html(Handlebars.compile(clockview));
        });

        this.doSomething = function() {
            console.log('click');
        }

        this.startclock = function() {
            console.log('here');
        }

        this.after('initialize', function() {
            var front = {view: 'apps/clock/views/clock.hbs'};

            this.view(front);
            this.loadcss('apps/clock/css/clock.css');
            this.startclock();
            this.on('click', this.doSomething);
        });
    }
});