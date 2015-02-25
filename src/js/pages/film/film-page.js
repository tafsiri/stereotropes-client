define(function(require) {

  var View = require('../../core/view');
  var template = require('tmpl!../film/film-page');

  return View.extend({

    template: template,

    initialize: function(options) {
      this.options = options;
    },

    _render: function() {
      this.$el.html(this.template(this.options));
      return this;
    }
  });
});