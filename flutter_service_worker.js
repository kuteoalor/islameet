'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/config": "920a11de313bfb8d93d81f4a3a5b71b6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"assets/AssetManifest.bin": "607ad9fbc13f1faf12ddd1a7150897da",
"assets/AssetManifest.bin.json": "2eb86a04ef9722b5241f35ee410e454d",
"assets/AssetManifest.json": "22ccb55ed2df3e7aa69c2c264fd69d4a",
"assets/assets/images/background.png": "fcbfc756576f10aba399dde5f7a881b5",
"assets/assets/images/valeria.jpg": "4736366110ecb6818d0c4228083e76f5",
"assets/assets/images/valeria.png": "7b8d3b3b10906d8ea8151ee65eb27007",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "d6b60e220eef96ef3b1bf91c2fe18669",
"assets/NOTICES": "a9562d7cbc0ba500c5773a74192522fa",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "1f2d3aa45ff6d7efa935386d82f22845",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b361deec30f17e49606f8cda8baca00b",
"/": "b361deec30f17e49606f8cda8baca00b",
"islameet/.git/config": "c2799ea644d85b3a850f79cef5550bb4",
"islameet/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"islameet/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"islameet/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"islameet/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"islameet/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"islameet/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"islameet/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"islameet/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"islameet/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"islameet/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"islameet/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"islameet/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"islameet/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"islameet/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"islameet/.git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
"islameet/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"islameet/.git/index": "39dd32fb9a03ee2198021d940a3b3e4f",
"islameet/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"islameet/.git/logs/HEAD": "bc2c5843e2eefad7e3bbc1ad3e9a82f5",
"islameet/.git/logs/refs/heads/main": "bc2c5843e2eefad7e3bbc1ad3e9a82f5",
"islameet/.git/logs/refs/remotes/origin/HEAD": "bc2c5843e2eefad7e3bbc1ad3e9a82f5",
"islameet/.git/objects/pack/pack-2df9b2793381c2ddd3b968bee9e5fe99124916d3.idx": "fd4f8081c6f0036938932d529674c53f",
"islameet/.git/objects/pack/pack-2df9b2793381c2ddd3b968bee9e5fe99124916d3.pack": "96d8959734f7d662e6975eea29cc5015",
"islameet/.git/objects/pack/pack-2df9b2793381c2ddd3b968bee9e5fe99124916d3.rev": "a45744d83f64c775be882c65b19f86e8",
"islameet/.git/packed-refs": "04f03d7ff0dcfcdaf46f0f2ce5ef8a7b",
"islameet/.git/refs/heads/main": "aa63f4fcfee208c12f17f52c7722ae68",
"islameet/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"islameet/assets/AssetManifest.bin": "607ad9fbc13f1faf12ddd1a7150897da",
"islameet/assets/AssetManifest.bin.json": "2eb86a04ef9722b5241f35ee410e454d",
"islameet/assets/AssetManifest.json": "22ccb55ed2df3e7aa69c2c264fd69d4a",
"islameet/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"islameet/assets/fonts/MaterialIcons-Regular.otf": "e0a9578cd907b354c2eb029e0bf82dc1",
"islameet/assets/images/background.png": "fcbfc756576f10aba399dde5f7a881b5",
"islameet/assets/images/valeria.jpg": "4736366110ecb6818d0c4228083e76f5",
"islameet/assets/images/valeria.png": "7b8d3b3b10906d8ea8151ee65eb27007",
"islameet/assets/NOTICES": "8d5e58a13a67781a917abf2bde846a8a",
"islameet/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"islameet/assets/shaders/ink_sparkle.frag": "9bb2aaa0f9a9213b623947fa682efa76",
"islameet/canvaskit/canvaskit.js": "4d65242fccdb38953e45f906580087a5",
"islameet/canvaskit/canvaskit.js.symbols": "68b4c27088ca664bd398c84602f6de11",
"islameet/canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"islameet/canvaskit/chromium/canvaskit.js": "9fc614fc55d9c852d4cb69570e9eb2fa",
"islameet/canvaskit/chromium/canvaskit.js.symbols": "6d72c539b91c938625180cd26d5af7c7",
"islameet/canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"islameet/canvaskit/skwasm.js": "01111146932af09cee166932d1a83d3c",
"islameet/canvaskit/skwasm.js.symbols": "ae71f1f1dabb12c89961a6be7d646b79",
"islameet/canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"islameet/canvaskit/skwasm.worker.js": "e35e7fbec8f04f340add4f6ace89a29c",
"islameet/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"islameet/flutter.js": "5bc83814f3f68c3e5f8f6b6bdeab1f50",
"islameet/flutter_bootstrap.js": "3bf03ea117ba102f86da29b3828a5c66",
"islameet/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"islameet/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"islameet/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"islameet/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"islameet/index.html": "9a3529e7959cc365d184c55f5cba97b9",
"islameet/main.dart.js": "aa89fb02206882f4f674fadebb8c5ad9",
"islameet/manifest.json": "60901a346c032a3803ad09a10ad9a67d",
"islameet/version.json": "7b96e793d3b4190c2a103e0d4ef222f6",
"main.dart.js": "c6d2cef9c9bd1903f1a78ad1352f0ea7",
"manifest.json": "60901a346c032a3803ad09a10ad9a67d",
"version.json": "7b96e793d3b4190c2a103e0d4ef222f6"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
