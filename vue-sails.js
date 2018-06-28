(function() {
  'use strict';

  var plugin = {
    install: function(Vue, io) {

      // Every component will have this
      Vue.mixin({
        created: function() {
          this.$io = io;
        }
      })
    }
  };

  if(typeof exports === 'object' && typeof module === 'object') {
    module.exports = plugin
  } else if(typeof define === 'function' && define.amd) {
    define(function () { return plugin })
  } else if (typeof window !== 'undefined') {
    window.VueAsyncData = plugin
  }
})();