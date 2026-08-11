// Service worker tối giản - chỉ để PWA hợp lệ (cài được vào điện thoại), không cache gì
// vì dữ liệu học viên luôn cần lấy mới nhất từ server mỗi lần mở app.

self.addEventListener('install', function (event) {
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function (event) {
  event.respondWith(fetch(event.request));
});
