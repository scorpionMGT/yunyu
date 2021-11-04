// 我们可以使用self来表示全局作用域，self, 没有窗体这个概念 window === self
self.addEventListener('install', event => {
    let CACHE_NAME ='yunyu-cache' 
    let urlsToCache = [
        '/static/js/0.chunk.js',
        '/static/js/1.chunk.js',
        '/static/js/bundle.js',
        '/static/js/main.chunk.js',
        '/manifest.json',
        '/favicon.ico',
        '/index.html',
        '/sockjs-node/info',
        '/home'
    ]
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log('cache', cache)
            return cache.addAll(urlsToCache)
        })
    )
})

self.addEventListener('activate', event => {
    // https://developer.mozilla.org/zh-CN/docs/Web/API/ExtendableEvent/waitUntil
    event.waitUntil(
        // https://developer.mozilla.org/zh-CN/docs/Web/API/Clients/matchAll
        self.clients.matchAll().then(function(clientList) {
            for (let i = 0 ; i < clients.length; i++) {
                if (clientList[i].url === 'index.html') {
                    self.clients.openWindow(clientList[i]);
                    // or do something else involving the matching client
                }
            }
        })
    )
})

self.addEventListener('fetch', function(event) {
  event.respondWith(caches.match(event.request).then(function(response) {
    // caches.match() always resolves
    // but in case of success response will have value
    if (response !== undefined) {
      return response;
    } else {
      return fetch(event.request).then(function (response) {
        // response may be used only once
        // we need to save clone to put one copy in cache
        // and serve second one
        let responseClone = response.clone();
        
        caches.open('yunyu-cache').then(function (cache) {
        //   cache.put(event.request, responseClone);
        });
        return response;
      }).catch(function () {
        return caches.match('/sw-test/gallery/myLittleVader.jpg');
      });
    }
  }));
});
