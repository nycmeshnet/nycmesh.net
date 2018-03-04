/**
 * Headerlinks
 * Created by Explosion Pills <explosion-pills@aysites.com>
 * Report Bugs: <bugs@truthanduntruth.com>
 * Documentation: http://explosion-pills.com/development/jquery/plugins/headerlinks/
 */
;(function ($, window, document, undefined) {
    var pluginName = "headerlinks",
        defaultOptions = {
            minLength: 5,
            include: [],
            deny: [],
            headers: {
                use: true,
                depth: 3
            },
            numbers: true,
            container: {
                'width': '30%',
                'border': '1px solid black',
                'padding': '10px',
                'font-size': '10px'
            },
            init: true
        };
    hierarchy = {}
    for (var x = 1; x <= 6; x++) {
        hierarchy['h' + (x + 1)] = {
            'css': {'margin-left': (20 * x) + 'px'},
            num: x + 1
        }
    }
    defaultOptions.hierarchy = hierarchy;

    Plugin = function (toc, userOptions) {
        this.toc = toc;

        this.options = $.extend({}, defaultOptions, userOptions);
        this._defaultOptions = defaultOptions;
        this._name = pluginName;
    }

    Plugin.prototype.init = function () {
        if (!this.options.include) {
            this.headers = true;
        }
        var inclusions;
        if (typeof(this.options.include) == 'object') {
            inclusions = this.options.include.join(', ');
        }
        else if (typeof(this.options.include == 'string')) {
            inclusions = this.inclusions;
        }

        if (this.options.headers.use) {
            var head = this.options.headers;
            if (head.depth < 1 || head.depth > 6) {
                head.depth = 3;
            }
            for (var x = 1; x <= head.depth; x++) {
                if (inclusions.length) {
                    inclusions += ', ';
                }
                inclusions += 'h' + x;
            }
        }
        var deny = '';
        if (this.options.deny.length > 0) {
            if (typeof(this.options.deny) == 'object') {
                deny = this.options.deny.join(', ');
            }
            else {
                deny = this.options.deny;
            }
        }
        var use_hierarchy = this.options.hierarchy && !$.isEmptyObject(this.options.hierarchy);
        var selector = $(inclusions).not(deny);
        var matches = false;
        var any_matches = false;
        var indeces = {1: 0};
        var all_links = 0;
        var numbers = this.options.numbers;

        this.toc.hide();
        selector.each($.proxy(function (index, elem) {
            all_links++;
            if (all_links >= this.options.minLength) {
                this.toc.show();
            }
            var $match = $(elem);
            var link = 'headerlinks_ident' + index;
            var anchor = null;
            var matched_css = {};
            var index_text = '';

            if (!elem.id) {
                elem.id = link;
            }
            else {
                link = elem.id;
            }

            matches = false;
            $.each(this.options.hierarchy, function (hr, attributes) {
                if (!$match.is(hr)) {
                    //continue loop
                    return;
                }
                matches = true;
                matched_css = attributes.css;
                var num = attributes.num;
                if (numbers && num) {
                    if (indeces[num] == undefined) {
                        indeces[num] = 1;
                    }
                    else {
                        indeces[num]++;
                    }
                    $.each(indeces, function (index, val) {
                        if (num >= index) {
                            index_text += val + '.';
                        }
                        else {
                            indeces[index] = 0;
                        }
                    });
                }
            });

            var linker = document.createElement('a');
            var linker_text = '';

            if (numbers) {
                if (index_text.length == 0) {
                    $.each(indeces, function (index) {
                        if (index == 1) {
                            indeces[index]++;
                        }
                        else {
                            indeces[index] = 0;
                        }
                    });
                    index_text = indeces[1] + '. ';
                }
                else {
                    index_text += ' ';
                }
                linker_text = index_text;
            }
            linker_text += $match.text();
            linker.href = '#' + link;
            $(linker)
                .css($.extend({'display': 'block'}, matched_css))
                .text(linker_text)
            ;
            this.toc.append(linker);
        }, this));

        this.toc.css(this.options.container);
        if (this.options.init && location.hash != '') {
            window.location = window.location;
        }
    };

    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, pluginName)) {
                var headerlinks = new Plugin($(this), options);
                headerlinks.init();
                $.data(this, pluginName, headerlinks);
            }
        });
    }
})(jQuery, window, document);
