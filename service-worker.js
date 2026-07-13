/* ==========================================================
   RENÉ AUREN APP
   Service Worker
   Versión 1.0
========================================================== */

const CACHE_NAME = "reneauren-app-v1";

const APP_FILES = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./database.js",
  "./manifest.json"
];

/* ==========================================================
   INSTALACIÓN
========================================================== */

self.addEventListener("install", (event) => {

  event.waitUntil(

    caches.open(CACHE_NAME)
      .then((cache) => {

        return cache.addAll(APP_FILES);

      })

  );

  self.skipWaiting();

});

/* ==========================================================
   ACTIVACIÓN
========================================================== */

self.addEventListener("activate", (event) => {

  event.waitUntil(

    caches.keys().then((keys) => {

      return Promise.all(

        keys.map((key) => {

          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }

        })

      );

    })

  );

  self.clients.claim();

});

/* ==========================================================
   FETCH
========================================================== */

self.addEventListener("fetch", (event) => {

  if (event.request.method !== "GET") {
    return;
  }

  event.respondWith(

    caches.match(event.request)

      .then((cachedResponse) => {

        if (cachedResponse) {
          return cachedResponse;
        }

        return fetch(event.request)
          .then((networkResponse) => {

            if (
              !networkResponse ||
              networkResponse.status !== 200
            ) {
              return networkResponse;
            }

            const clonedResponse =
              networkResponse.clone();

            caches.open(CACHE_NAME)
              .then((cache) => {

                cache.put(
                  event.request,
                  clonedResponse
                );

              });

            return networkResponse;

          })

          .catch(() => {

            return caches.match("./index.html");

          });

      })

  );

});