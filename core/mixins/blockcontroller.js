define(function(require) {

    function blockcontroller() {

        this.flip = function() {
            //flip the appcard showing the back/front.
            //back of the card shows the settings for each app
            console.log('flip');
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
            options.front = front hbr template to apply
            options.rear = rear hbr template to apply
            options.hbr = variables to be passed into hbr view
        */
        this.blockView = function(options) {
            if (!options.front) return;

            var self = this.$node,
                viewz = [],
                coreTemplate,
                path = options.front.view,
                i = path.lastIndexOf('/');

            //Work out the path for the application
            if (i != -1) {
                path = "text!/blocks/"+ path.substr(0, i)
            }

            //Push core view
            options.core = path +"/core.hbs";

            require([options.core, "text!/blocks/"+options.front.view, "text!/blocks/"+options.rear.view], function(core, front, rear) {
                
                coreTemplate = Handlebars.compile(core);
                front = Handlebars.compile(front);
                rear = Handlebars.compile(rear);

                Handlebars.registerPartial("front", front(options.front.options));

                if (rear) {
                    Handlebars.registerPartial("rear", rear(options.rear.options));
                };

                console.log('coreTemplate', coreTemplate());

                // if (options.clazz) {
                //     //Add class support
                // };

                if (options.element) {
                    self.find(options.element).html(coreTemplate());
                } else {
                    self.html(coreTemplate());
                };
            });

            console.log('options', options)

            // viewz.push("text!/blocks/"+ options.front.view +"");

        }
    }

    return blockcontroller;

});