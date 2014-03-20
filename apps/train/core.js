define(function (require) {
    var defineComponent = require('flight/component'),
        statusboard = require('mixin/statusboard');

    return defineComponent(train, statusboard);

    function train() {

        this.defaultAttrs({});

        console.log('train', this);

        this.doSomething = function() {
            console.log('click');
        }

        this.startclock = function() {
            console.log('here');
        }

        this.after('initialize', function() {
            var front = {view: 'apps/train/views/train.hbs'};

            this.view(front);
            this.loadcss('apps/train/css/train.css');
        });
    }
});