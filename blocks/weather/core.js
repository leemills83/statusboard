define(function (require) {
    var defineComponent = require('flight/component'),
        block = require('mixin/blockcontroller');

    return defineComponent(clock, block);

    function clock() {

        this.defaultAttrs({});

        this.doSomething = function() {
            console.log('click');
        }

        this.after('initialize', function() {
            var front = {view: 'weather/views/weather.hbs'};
            
            this.loadcss('blocks/weather/css/weather.css');

            this.on('click', this.doSomething);
        });
    }
});