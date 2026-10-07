// SPDX-License-Identifier: AGPL-3.0-or-later
// La web s'ha traslladat a https://meteo-montflorit.github.io/ (ADR 0028 de
// meteo-local). Aquest service worker substitueix l'antic: esborra el seu
// magatzem (només el seu: l'origen és compartit amb altres webs) i es dona de
// baixa.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.delete('meteo-montflorit').then(() => self.registration.unregister()));
});
