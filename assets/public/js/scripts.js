"use strict";!function(t){var r=".js-dropdown",i="is-show",o=".js-dropdown-button",a="is-hover",l="is-open";Drupal.behaviors.dropdown={attach:function(s){var n=this;t(r,s).once("dropdown").each(function(){var s=t(this),e=s.children(o);!Modernizr.touch&&s.hasClass("js-dropdown-on-hover")&&s.hover(function(){e.trigger("click")},function(){e.hasClass(a)&&e.trigger("click")}),e.on("click",function(s){s.preventDefault();var e=t(this);if(e.hasClass(a)){var o=e.closest(r);n.resetAll(o)}else 0===e.parents(".is-show").length&&n.resetAll(),e.offsetParent().addClass(i),e.addClass(a).next().addClass(l).find("input:first").focus()}),t(document).once("clickOutsideDropdown").on("click touchstart",function(s){0===t(s.target).closest(r).length&&Drupal.behaviors.dropdown.resetAll()})})},resetAll:function(s){s?s.removeClass(i):(s=t(document)).find(r).removeClass(i),s.find(o).removeClass(a).next().removeClass(l)}}}(jQuery);
"use strict";!function(o){o(document).ready(function(){o('a[href="#nolink"], a[href="#"]').on("click",function(n){n.preventDefault()});var e=o(".js-header"),n=o("body").hasClass("user-logged-in");function i(){var n=e.outerHeight();e.addClass("is-fixed"),o("body").css({paddingTop:n})}e.length&&!n&&(i(),o(window).on("resize",function(){i()}))})}(jQuery);