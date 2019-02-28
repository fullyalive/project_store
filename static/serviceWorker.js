self.addEventListener("install", event => {
  // (캐시를 저장하는 함수) serviceWorker가 등록되었을 때의 event, 등록되자마자 바로 작동
  const offlinePage = new Request("/"); // 설치가 되면 serviceWorker가 등록된 페이지에 대해서 요청을 날린다.
  event.waitUntil(
    fetch(offlinePage).then(response => {
      return caches.open("wildwater").then(cache => {
        // 유저의 캐시를 가지고 wildwater라는 폴더를 연다.
        return cache.put(offlinePage, response); // 캐시가 열리면 cache에 방금 얻은 offlinePage를 서버에서 받은 response와 함께 넣어준다
      });
    })
  );
});

self.addEventListener("fetch", event => {
  // 저장된 페이지 캐시를 받아 에러(오프라인)인 경우 출력해주는 함수
  event.respondWith(
    fetch(event.request).catch(error => {
      return caches.open("wildwater").then(cache => cache.match("/"));
    })
  );
});

self.addEventListener("push", event => {
  console.log(event);
  const title = "와일드워터";
  const options = {
    body: event.data.text(),
    icon: "./static/192x192.png"
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

/* serviceoWorker는 웹 사이트가 작동 중이 아니더라도 유저의 컴퓨터에서 동작하는 자바스크립트 파일
        만약 serviceoWorker가 connection에서 문제를 발견하거나 웹사이트가 오프라인이라면 유저에게 오프라인 버전을 보여주는 것
        service worker는 웹사이트가 아닌 navigator에 머무른다
        오프라인 캐싱 : 해당 웹사이트로 오는 모든 경로들을 캐치 */
