// function 함수(x: unknown[]) {
//   return x[0];
// }
function 함수5(x) {
    return x.length;
}
var test = 함수5(["100"]);
// generic은 class에도 사용가능함
// class <Typename> {}
// 이런식으로 만들면 new로 뽑을때 타입파라미터 집어넣을 수 있음
// type Age<Typename> = Typename 이런식으로 타입변수에도 사용가능
// 5분숙제
//(숙제1) 문자를 집어넣으면 문자의 갯수, array를 집어넣으면 array안의 자료 갯수를 콘솔창에 출력해주는 함수는 어떻게 만들까요?
// 연습삼아 Generic 이런걸로 만들어봅시다. 굳이 Generic 이런게 필요는 없겠지만요
// (동작 예시)
// 함수<string>('hello') 이렇게 사용하면 콘솔창에 5가 나와야합니다.
// 함수<string[]>( ['kim', 'park'] ) 이렇게 사용하면 콘솔창에 2가 나와야합니다.
function 숙제1함수(x) {
    console.log(x.length);
}
숙제1함수("hello");
숙제1함수(["kim", "park"]);
var data = '{"name" : "dog", "age" : 1 }';
function JSONConverter(x) {
    return JSON.parse(x);
}
var result = JSONConverter(data);
console.log(result);
//(숙제3) class 를 수정해봅시다.
// class Person {
//     name;
//     constructor(a){
//       this.name = a;
//     }
//   }
//   let a = new Person('어쩌구');
//   a.name //any 타입이 되었넹
// 지금 만든 class는 new Person('어쩌구') 라고 분명 문자를 집어넣었는데 any 타입이 name 속성에 부여됩니다.
// 이게 싫어서 파라미터에 string을 집어넣으면 string 타입
// number를 집어넣으면 number 타입
// string[]을 집어넣으면 string[] 타입이 되게 하려면 위의 코드를 어떻게 수정해야할까요?
// 오늘 배운 Generic을 이용해봅시다.
var Person10 = /** @class */ (function () {
    function Person10(a) {
        this.name = a;
    }
    return Person10;
}());
var test1 = new Person10("어쩌구");
var test2 = new Person10(222);
test1.name;
test2.name;
