/* global define, window */
(function() {
  'use strict';

  var plugin = {
    install: function(Vue, io) {
      var vueSails = {
        promiseForRequest(type, url, data){
          return new Promise(resolve => io.socket[type](url, data, resolve));
        },
        get(url, data){
          return this.promiseForRequest('get', url, data);
        },
        post(url, data){
          return this.promiseForRequest('post', url, data);
        },
        put(url, data){
          return this.promiseForRequest('put', url, data);
        },
        patch(url, data){
          return this.promiseForRequest('patch', url, data);
        },
        delete(url, data){
          return this.promiseForRequest('delete', url, data);
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
