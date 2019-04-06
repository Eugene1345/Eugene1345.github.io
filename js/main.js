if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw_cached_pages.js')
      .then(reg => console.log('Register'))
      .catch(err => console.log(err));
  });
} 