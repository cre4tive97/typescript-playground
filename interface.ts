// 오브젝트에 타입지정하려면 interface 문법도 있음

interface Square {
  color: string;
  width: number;
}
// Class 문법이랑 비슷한 느낌임

let 네모: Square = { color: "red", width: 100 };

interface Student {
  name: String;
}
interface Teacher {
  name: String;
  age: Number;
}
let 학생: Student = { name: "kim" };
let 선생: Teacher = { name: "kim", age: 20 };

// interface 장점 : extends로 복사가능
// Class 문법과 매우 유사함

interface Teacher1 extends Student {
  age: Number;
}

let 선생1: Teacher1 = { name: "kim", age: 30 };

// type alias도 이런거 가능함

type Animal = { name: string };
type Cat = Animal & { age: number };

let 고양이: Cat = { name: "poppy", age: 4 };

// &(intersection type, 교차 타입)
// 두 타입을 만족하는 타입이라고 생각하면 됨

// type vs interface
//1. interface는 중복선언 가능, type은 중복선언 불가능

interface Student1 {
  name: String;
}
interface Student1 {
  score: Number;
}

let student1: Student1 = { name: "Choi", score: 50 };

// Student1 타입에는 { name : string, score : number } 이런식으로 되버림.
// 중복선언하면 자동으로 extends 됨

//
//
// interface의 장점은?
// 수정/추가가 쉬워서, 외부 라이브러리에서는 interface 많이 씀.
// 내가 짠 코드를 다른사람이 이용/수정 할 일이 있다면, interface로 선언해도 나쁘지 않음

// intersection type과 interface 타입 주의점
//1. interface 중복선언 or extends 할 때..

interface Dog {
  age: String;
}
// interface Dog {
//   age: Number;
// }

// 같은 age라는 속성으로 중복선언 하면 에러가 뜸.
// interface Dog {
//  age: String;
//  age: Number;
// }

// 위에 코드랑 똑같은 의미임. 그래서 안됨.

//2. intersection type에서의 중복
type Beer = { name: String };
type Count = { name: Number } & Beer; // << 이런식으로 선언 자체는 에러가 안 남.

//let beer: Count = { name: "Asahi" }; < never type 에러 뜸

//
//
// 5분숙제

//(숙제1) interface 이용해서 간단하게 타입을 만들어봅시다
// let 상품 = { brand : 'Samsung', serialNumber : 1360, model : ['TV', 'phone'] }
// 이런 변수가 있는데 interface 키워드로 타입지정 이쁘게 하고 싶습니다. 어떻게 코드를 짜면 될까요?
// 무슨 타입일지는 알아서 기입합시다.

interface Product {
  brand: String;
  serialNumber: Number;
  model: String[];
}
let 상품: Product = {
  brand: "Samsung",
  serialNumber: 1360,
  model: ["TV", "phone"],
};

//(숙제2) array 안에 object 여러개가 필요합니다.
//쇼핑몰 장바구니를 구현하려고 하는데
//let 장바구니 = [ { product : '청소기', price : 7000 }, { product : '삼다수', price : 800 } ]
//이렇게 생긴 object들이 잔뜩 들어갈 수 있는 array는 어떻게 타입을 지정해야할까요?

interface Cart {
  product: String;
  price: Number;
}

let 장바구니: Cart[] = [
  { product: "청소기", price: 7000 },
  { product: "삼다수", price: 800 },
];

console.log(장바구니);

//(숙제3) 위에서 만든 타입을 extends 해봅시다.
//갑자기 서비스가 업데이트되어서 일부 상품은 card 속성이 들어가야합니다.
//{ product : '청소기', price : 7000, card : false }
//위에서 만든 interface를 extends 해서 이 object의 타입을 만들어보십시오.

interface NewCart extends Cart {
  card: Boolean;
}

let newCart: NewCart = { product: "청소기", price: 7000, card: false };

// (숙제4) object 안에 함수를 2개 넣고 싶은데요
// 1. 이 object 자료는 plus() 함수를 내부에 가지고 있으며 plus 함수는 파라미터 2개를 입력하면 더해서 return 해줍니다.
// 2. 이 object 자료는 minus() 함수를 내부에 가지고 있으며 minus 함수는 파라미터 2개를 입력하면 빼서 return 해줍니다.
// 이 object 자료를 어떻게 만들면 될까요?
// interface를 이용해서 object에 타입지정도 해보십시오.

interface PlusMinus {
  plus: (a: number, b: number) => number;
  minus: (a: number, b: number) => number;
}

let 오브젝트: PlusMinus = { plus: (a, b) => a + b, minus: (a, b) => a - b };
