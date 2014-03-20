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
            var self =this;
            require(['text!./views/fos-cnv.hbs'], function(foscnvview){
                self.$node.html(Handlebars.compile(foscnvview));
            });
            this.loadcss('apps/fos-cnv/css/fos-cnv.css');
        });
    }
});