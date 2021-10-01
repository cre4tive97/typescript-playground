// DOM 조작 in TS
var title = document.querySelector("#title");
//title.innerHTML = "반가워요";  << 에러
// 왜 에러가 뜨냐면
// 만약 #title 이라는 id가 없을경우 title에는 null이라는 값이 할당되기 때문임.
// 그래서 title은 Element | null 이라는 union type을 가짐
// Narrowing을 하면 된다..
// 1. if != null
if (title !== null) {
    title.innerHTML = "반가워요";
}
// 2. if instanceof Element (가장 많이 씀)
if (title instanceof Element) {
    title.innerHTML = "반가워요";
}
// 3. assertion
var title1 = document.querySelector("#title");
title1.innerHTML = "반가워요";
// 4. 오브젝트에 ? (optional chaining)
if ((title === null || title === void 0 ? void 0 : title.innerHTML) !== undefined) {
    title.innerHTML = "반가워요";
}
// title?.innerHTML 의 의미는?
// 만약에 title 오브젝트에 innerHTML이 있다면 출력해주고, 없다면 undefined 를 뱉음
// title이 null이라면 undefined를 뱉으니까 1번과 비슷한? 원리임
// 5. tsconfig.json 에서 strict모드 끄기.
// 해서는 안 될 짓.
// a 태그도 해보자.
var 링크 = document.querySelector(".link");
if (링크 instanceof HTMLAnchorElement) {
    링크.href = "https://kakao.com";
}
// a 태그에는.. Element 타입이 아닌, HTMLAnchorElement 라는 더 엄격한 타입으로 Narrowing 해야 한다.
// HTMLHeadingElement, HTMLButtonElement 등등.. 여러가지 있음
// 태그마다 정해져있음.
var 버튼 = document.querySelector("#button");
버튼 === null || 버튼 === void 0 ? void 0 : 버튼.addEventListener("click", function () { });
// addEventListener에도 optional chaining 으로 narrowing이 가능함.
// optional chaining 원리는..
// 오브젝트에서 자료 뽑을 때 object.어쩌고 이런식으로 뽑는데
// object?.어쩌고 이렇게도 가능함
// 어쩌고 라는 자료가 object에 존재하면, 어쩌고를 뽑아주던가
// 존재하지 않으면 undefined를 남겨주셈 과 같은 의미임
//
//
//-5분숙제
//(숙제1) 버튼을 누르면 기존 이미지를 new.jpg 라는 이미지로 바꿔보셈.
var 이미지 = document.querySelector("#image");
var 버튼1 = document.querySelector("#button");
버튼1 === null || 버튼1 === void 0 ? void 0 : 버튼1.addEventListener("click", function () {
    if (이미지 instanceof HTMLImageElement) {
        이미지.src = "new.jpg";
    }
});
//(숙제2) 바꾸고 싶은 html 요소가 많습니다.
//3개의 링크가 있는데 이 요소들의 href 속성을 전부 https://kakao.com으로 바꾸고 싶은 겁니다.
var link = document.querySelectorAll(".naver");
link.forEach(function (a) {
    if (a instanceof HTMLAnchorElement) {
        a.href = "https://kakao.com";
    }
});
//or
for (var i = 0; i < link.length; i++) {
    var a = link[i]; // 변수 만들어줘야 narrowing 잘 됨.
    if (a instanceof HTMLAnchorElement) {
        a.href = " https://kakao.com";
    }
}
