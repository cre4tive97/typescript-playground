// function 함수(x: unknown[]) {
//   return x[0];
// }

// let a = 함수([4, 2]);
// // let b = a + 2; << 에러

// // 함수의 파라미터 x는.. unknown 타입의 데이터들이 있는 어레이가 들어옴
// // 그래서 a또한 unknown 타입임. 그래서 + 같은 연산 불가능함
// // 근데 만약에 a 의 타입을 number로 바꾸고 싶다면 ?
// //
// // return x[0] as number;
// // 처럼 assertion을 해도 되지만..

// // 함수에 파라미터처럼 입력하는 Generic을 이용하면 편리하다

// function 함수2<MyType>(x: MyType[]): MyType {
//   return x[0];
// }

// let c = 함수2<number>([4, 2]); // c가 number 타입을 가지게 됨.
// let d = 함수2<string>(["kim", "park"]); // d가 string 타입을 가지게 됨.

// //
// //
// //
// //

// function 함수3<MyType>(x: MyType) {
//   return x - 1;
// }

// 함수3<number>(100);

// // 에러나는 이유는..
// // MyType이 어떤 타입이 들어올 지 확실하지 않기 때문임.
// // 만약에 string 타입이 들어온다면 -1 연산을 할 수 없으니까..
// // 해결하려면 if로 narrowing을 하던가 해야 하는데 매우 귀찮음
// // 그럴 때 타입으로 들어온 파라미터를 제한 할 수 있는데...

// function 함수4<MyType extends number>(x: MyType) {
//   return x - 1;
// }

// // 여기서 extends 의 의미는 class나 interface의 extends와는 조금 다름 (복사 X)
// // MyType이 extends 오른쪽에 있는 속성을 가지고 있는지 체크 한다  라는 느낌

interface LengthCheck {
  length: number;
}

function 함수5<MyType extends LengthCheck[]>(x: MyType) {
  return x.length;
}

let test = 함수5<string[]>(["100"]);

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

function 숙제1함수<T extends string | string[]>(x: T) {
  console.log(x.length);
}

숙제1함수<string>("hello");
숙제1함수<string[]>(["kim", "park"]);

//(숙제2) Animal 이라는 타입이 있습니다.
//interface Animal {
//    name : string;
//    age : number
//  }
//
//  let data = '{"name" : "dog", "age" : 1 }'

// data라는 JSON 자료를 object { } 자료로 변환을 해서 return 해주는 함수를 만들어보십시오.
// 근데 변환된 object의 타입은 Animal이 되었으면 좋겠는데 어떻게 코드를 짜면 될까요?
// 오늘 배운 Generic을 이용해서 구현해보도록 합시다.
// (동작 예시)
// 함수<Animal>(data) 이렇게 쓰면 이 자리에 { name : 'dog' , age : 1 } 이런 object 자료가 남아야합니다. 근데 타입은 Animal임

interface Animal1 {
  name: string;
  age: number;
}

let data = '{"name" : "dog", "age" : 1 }';

function JSONConverter<Type>(x: string): Type {
  return JSON.parse(x);
}

let result = JSONConverter<Animal1>(data);
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

class Person10<T> {
  name;
  constructor(a: T) {
    this.name = a;
  }
}
let test1 = new Person10<string>("어쩌구");
let test2 = new Person10<number>(222);
test1.name;
test2.name;
