define(function (require) {
    var defineComponent = require('flight/component'),
        block = require('mixin/blockcontroller'),
        flipclock = require('block/clock/libs/flipclock/flipclock.min');

    return defineComponent(clock, block);

    function clock() {

        this.defaultAttrs({});

        this.startClock = function() {
            var clock = this.$node.find('div.clock-face');

            clock.FlipClock({
                clockFace: 'TwentyFourHourClock'
            });
            console.log('starting clock', this);
        }

        this.after('initialize', function() {
            var frontView = {view:'clock/views/front.hbs', options:null, clazz:null},
                rearView = {view:'clock/views/rear.hbs'};
            
            this.loadcss('blocks/clock/libs/flipclock/flipclock.css');
            this.loadcss('blocks/clock/css/clock.css');

            this.blockView({front:frontView,rear:rearView});

            this.startClock();
        });
    }
});