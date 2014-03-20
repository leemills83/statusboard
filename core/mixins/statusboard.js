define(function(require) {

    function statusboard() {

        this.api = function() {

        }

        this.flip = function() {
            //flip the appcard showing the back/front.
            //back of the card shows the settings for each app
        }

        this.loadcss = function(url) {
            if(!$("link[href='"+ url +"']").length) {
                var link = document.createElement("link");
                link.type = "text/css";
                link.rel = "stylesheet";
                link.href = url;
                $("head")[0].appendChild(link);
            }
        }

        /*
            options.element = element to apply view too (if null applies to app $node)
            options.clazz = array of classes to be applied to main element
            options.view = hbr template to apply
            options.hbr = variables to be passed into hbr view
        */
        this.view = function(options) {
            if (!options.view) return;

            var self = this.$node,
                viewz = [];

            viewz.push("text!/"+ options.view +"");

            require(viewz, function(newview){
                var view = Handlebars.compile(newview);

                if (typeof options.hbr === 'object') {
                    view(options)
                };

                if (options.clazz) {
                    //Add class support
                };

                if (options.element) {
                    self.find(options.element).html(view);
                } else {
                    self.html(view);
                };
            });
        }
    }

    return statusboard;

});