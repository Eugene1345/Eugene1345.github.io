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

    cache.match(cacheAssets).then( item => {
      console.log(item);
    })

     fetch(cacheAssets).then(res => {
       return caches.open(cacheName).then(cache => {
         return cache.put(cacheAssets, res)
      })
     })
    })

    caches.open(cacheName).then(cache => {
      cache.delete(cacheAssets).then(() => {
        console.log('deleted');
      }
    )
    })
}