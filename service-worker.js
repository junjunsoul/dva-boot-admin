"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/dva-boot-admin/index.html","ad4ec991bb782fbfd7f7bd6208444666"],["/dva-boot-admin/static/css/main.6d67b85e.css","49e889e542f1693df272745fe38c111e"],["/dva-boot-admin/static/js/0.cfe8dbcf.chunk.js","aa3c1d8dc423059965440ee5b30ec592"],["/dva-boot-admin/static/js/1.dde49488.chunk.js","c3a1d97d6a1294f155b836c7b7d56759"],["/dva-boot-admin/static/js/10.092267bc.chunk.js","7f8677499a761c858abd150e40c318bd"],["/dva-boot-admin/static/js/11.e8bf827f.chunk.js","cf53f9dc452d0917fd3f68b13277307e"],["/dva-boot-admin/static/js/12.1c6919cd.chunk.js","a53b4f8688699b345394849ca1103002"],["/dva-boot-admin/static/js/13.6d196882.chunk.js","fbb22b297caab3a62503fde77de2eb8f"],["/dva-boot-admin/static/js/14.92d9d9b1.chunk.js","3e207f8d9fb70fd32d541dfc0fd98680"],["/dva-boot-admin/static/js/15.e4eba6e1.chunk.js","52c08de342406bb1900d99c6e11d75ce"],["/dva-boot-admin/static/js/16.024d607e.chunk.js","376b3c27884ec3e9ed174f1ee1241223"],["/dva-boot-admin/static/js/17.393abc30.chunk.js","b0be0f5c66e6755cfdea2aad8981f62e"],["/dva-boot-admin/static/js/18.023d6a3e.chunk.js","6c55a0362aa0757487e4c362797faed1"],["/dva-boot-admin/static/js/19.3bb30d77.chunk.js","e050cfbf4cf17128c34615249097daec"],["/dva-boot-admin/static/js/2.e189fa89.chunk.js","8d7cc844a1dbb4c590eeea8fe5dac2ce"],["/dva-boot-admin/static/js/20.54231ad3.chunk.js","bb3a26990accbb8525c352b3dd427ce7"],["/dva-boot-admin/static/js/3.9c94420f.chunk.js","4450c65d23a6875097a06ea498700dc2"],["/dva-boot-admin/static/js/4.a3e31b30.chunk.js","d024be6a7f2bd20db9d3ec6b164f3516"],["/dva-boot-admin/static/js/5.96df378d.chunk.js","28e2612b311a164657e0c51736b6bc1a"],["/dva-boot-admin/static/js/6.14bd14e7.chunk.js","f595383189e2d8892627adf3820aa81b"],["/dva-boot-admin/static/js/7.d92b9b43.chunk.js","3de342abecf6ab241905ec87d6d8945f"],["/dva-boot-admin/static/js/8.9056856d.chunk.js","23ed505a20dfff121fdd1ec961e82fc5"],["/dva-boot-admin/static/js/9.34ed121d.chunk.js","87e762760e63a40989eeea17dcdfad2c"],["/dva-boot-admin/static/js/main.ede470c0.js","497c81fc8d9836dc6fb1c6bc9272d1b0"],["/dva-boot-admin/static/media/avatar.595f9bc9.jpg","595f9bc9380b1cad5f61fdec19cda60b"],["/dva-boot-admin/static/media/icomoon.11da4f19.svg","11da4f19f54465b5a8dcddebb2ac737a"],["/dva-boot-admin/static/media/icomoon.96d7f1f2.woff","96d7f1f20e056647d4b29728a8d7c39b"],["/dva-boot-admin/static/media/icomoon.d585b42c.eot","d585b42ceaee40e267916bf3371037f3"],["/dva-boot-admin/static/media/icomoon.ea141907.ttf","ea14190751ba8d966844526ec6088bb1"],["/dva-boot-admin/static/media/pattern.c4113510.png","c4113510cff7beeda3fb0f77f2919b63"],["/dva-boot-admin/static/media/topbar-bg.eef71d63.jpg","eef71d63d83b49c46d954e9f41e8ff5e"],["/dva-boot-admin/static/media/workers.3bb77abc.png","3bb77abcf801d53bbda8fe52e4c240b3"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var n=new Request(t,{credentials:"same-origin"});return fetch(n).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),a=urlsToCacheKeys.has(t));var c="/dva-boot-admin/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(c,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});