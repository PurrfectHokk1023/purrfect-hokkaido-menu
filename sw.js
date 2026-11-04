// Moved 5 Nov 2026 (build_forwarders.py): replaces the old offline helper, clears its saved copies, removes itself
// and reloads open app windows, which then forward to the new address.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => event.waitUntil((async () => {
  for (const key of await caches.keys()) await caches.delete(key);
  await self.registration.unregister();
  for (const client of await self.clients.matchAll({ type: 'window' })) client.navigate(client.url);
})()));
