// service-worker.js — gerado pelo Mini SK em 26/10/2026, 00:22:58
// Não precisa mexer: ele guarda sozinho o que o app usa.
const PREFIXO = 'sk-mini-sk-';
const CACHE = PREFIXO + 'mvooynxs';
// Lista feita automaticamente (para funcionar sem internet logo após instalar)
const GUARDAR = [
  "./",
  "./css/01-estilo.css",
  "./css/02-estilo.css",
  "./css/03-estilo.css",
  "./css/04-estilo.css",
  "./css/05-estilo.css",
  "./css/06-estilo.css",
  "./css/07-estilo.css",
  "./css/08-estilo.css",
  "./css/09-estilo.css",
  "./css/10-estilo.css",
  "./css/11-estilo.css",
  "./favicon.ico",
  "./hub.html",
  "./hub.webmanifest",
  "./icons/apple-touch-icon.png",
  "./icons/icon-16.png",
  "./icons/icon-32.png",
  "./icons/icon-48.png",
  "./icons/icon-72.png",
  "./icons/icon-96.png",
  "./icons/icon-128.png",
  "./icons/icon-144.png",
  "./icons/icon-152.png",
  "./icons/icon-180.png",
  "./icons/icon-192.png",
  "./icons/icon-384.png",
  "./icons/icon-512.png",
  "./icons/icon.svg",
  "./icons/maskable-192.png",
  "./icons/maskable-512.png",
  "./icons/maskable.svg",
  "./index.html",
  "./js/01-codigo.js",
  "./js/02-codigo.js",
  "./js/03-codigo.js",
  "./js/04-codigo.js",
  "./js/05-codigo.js",
  "./js/06-codigo.js",
  "./js/07-codigo.js",
  "./js/08-codigo.js",
  "./js/09-codigo.js",
  "./js/10-codigo.js",
  "./js/11-codigo.js",
  "./js/12-codigo.js",
  "./js/13-codigo.js",
  "./js/14-codigo.js",
  "./js/15-codigo.js",
  "./js/16-codigo.js",
  "./js/17-codigo.js",
  "./js/18-codigo.js",
  "./js/19-codigo.js",
  "./js/20-codigo.js",
  "./js/21-codigo.js",
  "./js/22-codigo.js",
  "./js/23-codigo.js",
  "./js/24-codigo.js",
  "./js/25-codigo.js",
  "./js/26-codigo.js",
  "./js/27-codigo.js",
  "./js/28-codigo.js",
  "./js/29-codigo.js",
  "./js/30-codigo.js",
  "./js/31-codigo.js",
  "./js/32-codigo.js",
  "./js/33-codigo.js",
  "./js/34-codigo.js",
  "./js/35-codigo.js",
  "./js/36-codigo.js",
  "./js/37-codigo.js",
  "./js/38-codigo.js",
  "./js/39-codigo.js",
  "./js/40-codigo.js",
  "./js/41-codigo.js",
  "./js/42-codigo.js",
  "./js/43-codigo.js",
  "./js/44-codigo.js",
  "./js/45-codigo.js",
  "./js/46-codigo.js",
  "./js/47-codigo.js",
  "./js/Inventario.md",
  "./LEIA-MODULAR.md",
  "./manifest.json",
  "./PLANO.md",
  "./RECEITA.md"
];

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then((c) => Promise.all(GUARDAR.map((u) => c.add(u).catch(() => null)))));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys()
    .then((ks) => Promise.all(ks.filter((k) => k.startsWith(PREFIXO) && k !== CACHE).map((k) => caches.delete(k))))
    .then(() => self.clients.claim()));
});

// Primeiro a internet (sempre a versão nova); sem internet, a cópia guardada.
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  e.respondWith(
    fetch(req).then((res) => {
      if (res.ok) { const copia = res.clone(); caches.open(CACHE).then((c) => c.put(req, copia)); }
      // Igual ao Workbox da Replit: página que não existe (rota do app) abre o index
      if (res.status === 404 && req.mode === 'navigate') return caches.match('./').then((r) => r || fetch('./'));
      return res;
    }).catch(() => caches.match(req, { ignoreSearch: true }).then((r) => r || (req.mode === 'navigate' ? caches.match('./') : undefined)))
  );
});
