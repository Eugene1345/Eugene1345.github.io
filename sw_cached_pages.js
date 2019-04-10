// const cacheName = 'v2';

// const cacheAssets = [
//   '/css/main.css'
// ]

// self.addEventListener('install', (event) => {
//   console.log('ServiceWorker: Installed');

//   event.waitUntil(
//     caches
//       .open(cacheName)
//       .then(cache => {
//         console.log('Service Worker: Caching Files');
//         cache.addAll(cacheAssets);
//       })
//       .then(() => self.skipWaiting())
//   )
// });

// self.addEventListener('activate', (event) => {
//   console.log('ServiceWorker: Activated');
//   // event.waitUntil(
//   //   caches.keys().then(cacheNames => {
//   //     return Promise.all(
//   //       cacheNames.map(cache => {
//   //         if( cache !== cacheName ) {
//   //           console.log('Service Worker: Clearing Old Cache');
//   //           return caches.delete(cache);
//   //         }
//   //       })
//   //     )
//   //   })
//   // )
// });

// // self.addEventListener('fetch', e => {
// //   console.log('Service Worker: Fetching');
// //   e.respondWith(
// //     fetch(e.request)
// //       .then(res => {
// //         //Make copy/clone of response
// //         const resClone = res.clone();
// //         //Open Cache
// //         caches
// //           .open(cacheName)
// //           .then(cache => {
// //             // Add response to cache
// //             cache.put(e.request, resClone);
// //           });
// //           return res;  
// //       }).catch(err => caches.match(e.request).then(res => res))
// //   )
// // });