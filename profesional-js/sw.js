self.addEventListener('install', e =>{
    e.waitUntil(precache())
})

self.addEventListener('fetch', e =>{
    const request = e.request;
    if(request.method !== 'GET') return;

    e.respondWith(cachedResponse(request))

    e.waitUntil(updateCache(request))
})

async function precache (){
    const cache = await caches.open('v1')
   return cache.addAll([
        '/',
        '/index.html',
        '/assets/index.js',
        '/assets/MediaPlayer.js',
        '/assets/plugins/AutoPlay.js',
        '/assets/plugins/AutoPause.js',
        '/assets/index.css',
        '/assets/BigBuckBunny.mp4',
    ])
}

function cachedResponse(request){
    const cache = await caches.open('v1')
    const response = await cache.match(request);

    return response || fetch(request)
}

function updateCache(request){
    const cache = await caches.open('v1')
    const response = await fetch(request);
    return cache.put(request, response)
}