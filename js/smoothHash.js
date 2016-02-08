(function ($) {
    'use strict';

    $.fn.smoothHash = function (params) {
        var scrollers = $('html, body'),
            defaults = {
                speed: 500,
                smoothfunc: 'linear'
            };

        params = $.extend(defaults, params);

        // animate scroll position to element
        function animateScroll(el, callback) {
            var scroll;
            el = $(el);

            // find scroll position
            scroll = (el.length) ? el.offset().top : 0;

            scrollers.stop();
            scrollers.animate({
                scrollTop: scroll
            }, params.speed, params.smoothfunc, callback);
        }

        // runs animation before hash change, when link is clicked
        $(document).on('click', 'a[href*=#]', function (e) {
            var parser = document.createElement('a'), hash;
            parser.href = $(this).attr('href');
            hash = parser.hash;

            // if it links to a different page, don't animate
            if (window.location.protocol !== parser.protocol ||
                    window.location.host !== parser.host ||
                    window.location.pathname !== parser.pathname ||
                    window.location.search !== parser.search) {
                return true;
            }

            e.preventDefault();

            animateScroll(hash, function () {
                window.location.hash = hash;
            });
        });
    };
}(jQuery));
