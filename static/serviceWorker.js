/* serviceoWorker는 웹 사이트가 작동 중이 아니더라도 유저의 컴퓨터에서 동작하는 자바스크립트 파일 
        만약 serviceoWorker가 connection에서 문제를 발견하거나 웹사이트가 오프라인이라면 유저에게 오프라인 버전을 보여주는 것
        service worker는 웹사이트가 아닌 navigator에 머무른다 
        오프라인 캐싱 : 해당 웹사이트로 오는 모든 경로들을 캐치 */

setInterval(() => console.log("hi"), 5000);
