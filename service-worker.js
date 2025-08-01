self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open("nafsi-akwaa").then(function (cache) {
      return cache.addAll([
        "/",
        "/index.html",
        "/style.css",
        "/app.js",
        "/manifest.json",
        "/icons/icon-192x192.png",
        "/icons/512x512-5cb2.png",
      ]);
    })
  );
});

self.addEventListener("fetch", function (e) {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});
