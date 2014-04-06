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
        'text!./blocklist.json',
        'jquery', 'bootstrapjs',
         'gridster', 'handlebars'
        ],
        function (Blocklist, $, Bootstrap, Handlebars, Gridster) {
    var blocklist = JSON.parse(Blocklist),
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

    var gridster = $("#core > ul").gridster({
        widget_margins: [10, 10],
        widget_base_dimensions: [200, 200]
    }).data('gridster');

    for (var i=0; i<blocklist.blocks.length; i++) {
        var blockname = blocklist.blocks[i].blockname,
            blocksize = blocklist.blocks[i].size,
            filepath = '/blocks/'+ blockname +'/core.js';

        gridster.add_widget("<li class='"+ blockname +" app'></li>", blocksize.sizex, blocksize.sizey);

        require([filepath], function(application) {
            application.attachTo('li.'+blockname);
        });
    };
});