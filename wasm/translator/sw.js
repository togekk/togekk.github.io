importScripts('node_modules/sw-toolbox/sw-toolbox.js'); // Update path to match your own setup

toolbox.router.get('/index.html', toolbox.networkFirst);
toolbox.precache(['/index.html', '/dist/framework.min.js', '/dist/a.cpp']);