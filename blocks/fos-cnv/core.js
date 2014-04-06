define(function (require) {
    var defineComponent = require('flight/component'),
        statusboard = require('mixin/statusboard');

    return defineComponent(foscnv, statusboard);

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
            var front = {view: 'blocks/fos-cnv/views/fos-cnv.hbs'};

            this.view(front);
            this.loadcss('blocks/fos-cnv/css/fos-cnv.css');
        });
    }
});