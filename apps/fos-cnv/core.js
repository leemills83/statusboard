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
            var front = {view: 'apps/fos-cnv/views/fos-cnv.hbs'};

            this.view(front);
            this.loadcss('apps/fos-cnv/css/fos-cnv.css');
        });
    }
});