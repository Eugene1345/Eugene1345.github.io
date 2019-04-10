if ('caches' in window) {
  const name = 'my-app1'
  const assets = '/css/main.css'
  
  caches.open(name)
    .then(cache => {
      cache.match(assets)
        .then(res => {
          if (!res) {
            cache.add(assets)
          } else {
            console.log(res)
          }
      })
  })
}
