require.config({
  paths: {
        jquery: 'libs/jquery/dist/jquery.min',
        gridster: 'libs/gridster/jquery.gridster.min',
        bootstrapjs: 'libs/bootstrap/js/bootstrap.min',
        es5shim: 'libs/es5-shim/es5-shim.min',
        es5sham: 'libs/es5-shim/es5-sham.min',
        text: 'libs/require/text',
        handlebars: 'libs/handlebars',
        app: '../apps',
        mixin: 'mixins'
  },
  map: {
    '*': {
        'flight/component': 'libs/flight/lib/component',
    }
  },
  shim: {
    'libs/flight/lib/index': {
        deps: ['jquery', 'es5shim', 'es5sham']
    },
    'bootstrapjs': {
        deps: ['jquery']
    },
    'gridster': {
        deps: ['jquery']
    }
  }
});
 
require([
        'text!./applist.json',
        'jquery', 'bootstrapjs',
        'handlebars', 'gridster'
        ], 
        function (Applist, $, Bootstrap, Handlebars, Gridster) {
    var appslist = JSON.parse(Applist),
        loadcss = function (url) { //This needs to seperated as a require module and the statusboard mixin needs to reference
            if(!$("link[href='"+ url +"']").length) {
                var link = document.createElement("link");
                link.type = "text/css";
                link.rel = "stylesheet";
                link.href = url;
                $("head")[0].appendChild(link);
            }
        };

    //ERROR CHECK THE MANIFEST FILE HERE//

    loadcss('core/libs/bootstrap/css/bootstrap.min.css');
    loadcss('core/libs/gridster/jquery.gridster.min.css');
    loadcss('core/css/styles.css');

    for (var i=0; i<appslist.apps.length; i++) {
        var appname = appslist.apps[i].appname,
            appsize = appslist.apps[i].size,
            size = '',
            filepath = '/apps/'+ appname +'/core.js';

        //Not keen on this, but want to make the application dev process as idiot proof as possible
        switch(appsize)
        {
        case 'small':
            size = 'col-md-3'
            break;
        case 'medium':
            size = 'col-md-4'
            break;
        case 'large':
            size = 'col-md-6'
            break;
        default:
            size = 'col-md-12'
        }

        $("#core").append("<div class='"+ appname +" app "+ size +"'></div>");

        require([filepath], function(application) {
            application.attachTo('div.'+appname);
        });
    };
});