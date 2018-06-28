/* global define, window */
(function() {
  'use strict';


  var plugin = {
    install: function(Vue, io) {
      var promiseForRequest = (type, url, data) => new Promise(resolve => io[type](url, data, resolve));
      var vueSails = {
        get(url, data){
          return promiseForRequest('get', url, data);
        },
        post(url, data){
          return promiseForRequest('post', url, data);
        },
        put(url, data){
          return promiseForRequest('put', url, data);
        },
        patch(url, data){
          return promiseForRequest('patch', url, data);
        },
        delete(url, data){
          return promiseForRequest('delete', url, data);
        },
        on: io.on,
        off: io.off,

      };

      // Every component will have this
      Vue.mixin({
        created: function() {
          this.$io = vueSails;
        }
      });
    }
  };

  if(typeof exports === 'object' && typeof module === 'object') {
    module.exports = plugin;
  } else if(typeof define === 'function' && define.amd) {
    define(function () { return plugin; });
  } else if (typeof window !== 'undefined') {
    window.VueAsyncData = plugin;
  }
})();
