define(function (require) {
    var defineComponent = require('flight/component'),
        block = require('mixin/blockcontroller');

    return defineComponent(foscnv, block);

    function foscnv() {

        this.defaultAttrs({});

        console.log('foscnv', this);

        this.doSomething = function() {
            console.log('click');
        }

        this.startclock = function() {
            console.log('here');
        }

        this.after('initialize', function() {

            this.loadcss('blocks/fos-cnv/css/fos-cnv.css');
            this.on('click', this.doSomething);
        });
    }
});