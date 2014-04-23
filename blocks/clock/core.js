define(function (require) {
    var defineComponent = require('flight/component'),
        block = require('mixin/blockcontroller');

    return defineComponent(clock, block);

    function clock() {

        this.defaultAttrs({});

        this.doSomething = function() {
            console.log('click');
        }

        this.startclock = function() {
            console.log('here');
        }

        this.after('initialize', function() {
            var front = {view: 'clock/views/clock.hbs'};

            this.view(front);
            this.loadcss('blocks/clock/css/clock.css');
            this.startclock();
            this.on('click', this.doSomething);
        });
    }
});