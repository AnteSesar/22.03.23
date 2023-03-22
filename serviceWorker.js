var myCacheName = "myPWACache";

const addResourcesToCache = async (resources) => {
    console.log("I dunno ...");
    const cache = await caches.open('myCacheName');
    await cache.addAll(resources);
  };
  
  self.addEventListener('install', (event) => {
    console.log("Instaling ...");
    event.waitUntil(
      addResourcesToCache([
        '/',
        '/index.html',
        '/css/style.css',
        '/js/app.js',
        "/media/icons/32x32",
        "/media/icons/Icon_Bird_512x512"
      ])
    );
  });