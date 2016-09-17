/*! Amaze UI Plugin ~ fullpage */

/* global window, document, define, jQuery, setInterval, clearInterval */
(function(factory) {
  'use strict';

  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof exports !== 'undefined') {
    module.exports = factory(require('jquery'));
  } else {
    factory(jQuery);
  }

}(function($) {
  'use strict';

  // add method to jQuery prototype
  $.fn.fullpage = function(options) {
    var $container = $(this).parent();
    var $data = $container.data();
    var defauls = {
      autoplay: true,
      interval: 5000
    };
    var settings = {};
    if ($data.amAutoplay) {
      settings.autoplay = true;
      settings.interval = Math.max(+$data.amAutoplay, 500);
    }
    var $options = $.extend({}, defauls, settings, options);

    var $ol = $container.find('ol').last();
    var $lists = $ol.find('li');
    var $links = $ol.find('a');
    var state = $lists.first().attr('class');
    var interval = $options.interval;
    var length = $links.length;
    var index = 1;
    window.setInterval(function() {
      if (!$container.find('a:hover').length) {
        var $link = $links.eq(index);
        window.location.hash = $link.attr('href');
        $link.click();
      }
    }, interval);

    var $width = $(window).width();
    var $height = $(window).height();
    $links.on('click', function() {
      var $this = $(this);
      var $page = $($this.attr('href'));
      if ($page.width() !== $width) {
        $page.css({
          width: $width,
          height: $height
        });
      }
      $lists.removeClass(state);
      $this.parent().addClass(state);
      index = ($links.index(this) + 1) % length;
    });

  };

  $(function() {
    $('.am-fullpage').fullpage();
  });

}));
