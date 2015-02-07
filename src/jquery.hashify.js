/**
 * Given a selector of form fields, returns a name:value object hash
 * Author: msteitle@underarmour.com
 */

;(function ($) {
  $.fn.extend({
    hashify: function () {
      var arr = this.serializeArray();
      var output = {};
      var item;

      while (arr.length) {
        item = arr.pop();
        output[item.name] = item.value;
      }

      return output;
    }
  });
}).call(this, jQuery);