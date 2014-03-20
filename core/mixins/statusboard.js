define(function(require) {

    function statusboard() {

        this.api = function() {

        }

        this.el = function() {
            return 'Moo!!'
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

        this.view = function(template, element, clasz, options) {
            if ($.isArray(template)) {
                require(template, function(newview){
                    var view = Handlebars.compile(newview);
                    
                    if (options) {
                        view(options)
                    };

                    this.$(element).html(view);
                });
            } else {
                console.warn('invalid array of views: ', template);
            }
        }
    }

    return statusboard;

});