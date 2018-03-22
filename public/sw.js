self.addEventListener('fetch', function(event) {
  event.respondWith(
    new Response("static Maps")
  );
});
