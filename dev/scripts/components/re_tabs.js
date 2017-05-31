/*!
 * jQuery Tabs 0.0.1
*/
;(function ( $, window, document, undefined ) {
    var pluginName = 'tabs',
        defaults = {
            speed: 350,
            control: '[tab_control]',
            drawer: '[drawer_heading]',
            content: '[tab_content]',
        };
    function ResponsiveTabs(element, options) {
        this.element = element;
        this.options = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    ResponsiveTabs.prototype.init = function () {
        var self = this,
            opts = self.options;

        var $tabs = $(self.element),
            $controlTabs = $tabs.find(opts.control),
            $drawerTabs = $tabs.find(opts.drawer),
            $contentTabs =  $tabs.find(opts.content);
            $speedTabs =  opts.speed;

        function addEventListeners() {
            $controlTabs.on('click', function () {
                if ($(this).hasClass("active")) return;
                $contentTabs.slideUp($speedTabs).removeClass('open');
                var activeTab = $(this).attr("rel"); 
                $('[tab-'+activeTab+']').slideDown($speedTabs).addClass('open');
                $controlTabs.removeClass("active");
                $(this).addClass("active");
                $drawerTabs.removeClass("d_active");
                $("[drawer_heading][rel^='"+activeTab+"']").addClass("d_active");
            });
            $drawerTabs.on('click', function () {
                if ($(this).hasClass("d_active")) return;
                $contentTabs.slideUp($speedTabs).removeClass('open');
                var activeTab = $(this).attr("rel"); 
                $('[tab-'+activeTab+']').slideDown($speedTabs).addClass('open');
                $controlTabs.removeClass("active");
                $("[tab_control][rel^='"+activeTab+"']").addClass("active");
                $drawerTabs.removeClass("d_active");
                $(this).addClass("d_active");
            });

        }
        function setup() {
            $controlTabs.each(function() {
                if(!$(this).hasClass('active')) {
                    $('[tab-'+$(this).attr("rel")+']').hide().removeClass('open');
                    $("[drawer_heading][rel^='"+$(this).attr("rel")+"']").removeClass("d_active");
                } else {
                    $('[tab-'+$(this).attr("rel")+']').slideDown($speedTabs).addClass('open');
                    $("[drawer_heading][rel^='"+$(this).attr("rel")+"']").addClass("d_active");
                }
            });
            
                if(!$tabs.attr('data-tabs')) {$tabs.attr('data-tabs', '');}
                if(!$controlTabs.attr('tab_control')) {$controlTabs.attr('tab_control', '');}
                if(!$controlTabs.parent().attr('tabs_control')) {$controlTabs.parent().attr('tabs_control', '');}
                if(!$drawerTabs.attr('drawer_heading')) {$drawerTabs.attr('drawer_heading', '');}
                if(!$contentTabs.attr('tab_content')) {$contentTabs.attr('tab_content', '');}
        }
        setup();
        addEventListeners();
    };

    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName,
                new ResponsiveTabs( this, options ));
            }
        });
    }
})( jQuery, window, document );
$(document).ready(function() {
  $('[data-tabs]').tabs();
});
