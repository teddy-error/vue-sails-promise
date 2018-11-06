# vue-sails-promise

> [Sails](http://sailsjs.com/) is the most popular MVC framework for Node.js.
> Vue-Sails-Promise is a plugin for Vue.js that integrates it with Sails.

**NOTE:** It's supposed to be compatible both with Vue 1.x and 2.x.

### Install

``` bash
npm install vue-sails-promise
```

### Usage

``` js
// Include and set up Sails client
const socketIOClient = require('socket.io-client');
const sailsIOClient = require('sails.io.js');
const io = sailsIOClient(socketIOClient);

// Additional Sails.io.js configuration
// io.sails.url = 'http://localhost:1337';
// io.sails.environment = process.env.NODE_ENV || 'development';

// Include vue-sails-promise as a CommonJS module
const Vue = require('vue');
const vueSails = require('vue-sails-promise');

// Enable the plugin globally
Vue.use(vueSails, io)
```

Now in every component you get a new property called `$io`, which allows you to interact with the [Sails socket client](http://sailsjs.com/documentation/reference/web-sockets/socket-client):

``` js
this.$io.get(url, data).then(res => ...)
```

### License

[MIT](http://opensource.org/licenses/MIT)
