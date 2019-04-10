// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker
//       .register('/sw_cached_pages.js')
//       .then(reg => console.log('Register'))
//       .catch(err => console.log(err));
//   });
// } 

if ('caches' in window) {
  // The Cache API is supported
  const cacheName = 'my-website-cache1';
  const cacheAssets = '/css/main.css';

  caches.open(cacheName).then(cache => {
    // you can start using the cache
    console.log('yes');
    cache.add(cacheAssets).then(() => {
      console.log('added');
    });

    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if( cache !== cacheName ) {
            console.log('Service Worker: Clearing Old Cache');
            return caches.delete(cache);
          }
        })
      )
    })

     fetch(cacheAssets).then(res => {
       const resClone = res.clone();
       caches
        .open(cacheName)
        .then(cache => {
          // Add response to cache
          cache.put(e.request, resClone);
        });
        return res;
      }).catch(err => caches.match(e.request).then(res => res))
    })
}