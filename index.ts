let 이름: string = "최재문";
let 나이: number = 24;
let 출생지역: string = "울산";

let favMusic: { title: string; artist: string } = {
  title: "시차",
  artist: "우원재",
};

let project: { member: string[]; days: number; started: boolean } = {
  member: ["kim", "park"],
  days: 30,
  started: true,
};

// union, unknown, any
let 회원들: (number | string)[] = [1, "2", 3];
let 오브젝트: { a: string | number } = { a: "123" };

let 이름1: any;
이름1 = 123;
이름1 = {};

let 어쩌고: string = 이름1; // any는 type무시함

let 이름2: unknown;
이름2 = 123;
이름2 = [];

// let 어쩌고2: string = 이름2; << unknown은 타입 지켜줌
// unknown 타입은 연산 불가능

// TS에서는 연산도 엄격하게 적용됨.
let 나이1: string | number;
//나이1 + 1;        에러
let 나이2: string;
나이2 + 1; //잘됨
let 나이3: number;
나이3 + 1; // 잘됨

/* 
string 타입 +1 (허용)
number 타입 +1 (허용)
string | number 타입 +1 (안됨)
*/

let user: string = "kim";
let age: undefined | number = undefined;
let married: boolean = false;
let 철수: (string | undefined | number | boolean)[] = [user, age, married];

let 학교: {
  score: (number | boolean)[];
  teacher: string;
  friend: string | string[];
} = {
  score: [100, 97, 84],
  teacher: "Phil",
  friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];

function 함수(x: number): number {
  return x * 2;
}

function 함수1(x: number): void {
  //   return x % 2;  void는 return 없이만 가능, 함수 내부에 return이 있는지 체크할 때 쓰면 굿
}

//함수();   < 타입지정한 함수는 파라미터를 무조건 넣어야 함.

function 함수3(x?: number): number {
  return x + 2;
}
함수3(); // 함수 파라미터에 ?를 붙이면 파라미터가 있어도 되고 없어도 됨.
// ?의 원리
// 변수?:number === 변수 : number | undefined
// undefined가 합쳐진 union type 이라고 생각하면 된다

function 함수4(x: number | string) {
  // console.log(x + 3);  << 에러
}
// number | string 이라는 number도 아니고 string도 아닌 새로운 타입이라서 + 연산을 할 수 없음.
// 이걸 가능하게 하려면 Narrowing 로 타입을 확정해야한다.

//5분숙제

function 홍길동(x?: string): void {
  if (x) {
    console.log(`안녕하세요 ${x}`);
  } else {
    console.log("이름이 없습니다");
  }
}

function 자릿수(x: string | number): number {
  return x.toString().length;
}

function 결혼가능성(
  월소득: number,
  집보유여부: boolean,
  매력점수: string
): string | void {
  let score: number = 0;
  score += 월소득;
  if (집보유여부 === true) {
    score += 500;
  }
  if (매력점수 === "상") {
    score += 100;
  }
  if (score >= 600) {
    return "결혼가능";
  }
}

console.log(결혼가능성(100, true, "상"));

// Narrowing & Assertion

// if문 등으로 Narrowing 가능..
function 내함수(x: number | string) {
  if (typeof x === "string") {
    return x + "1";
  } else {
    return x + 1;
  }
}

function 내함수1(x: number | string) {
  let arr: number[] = [];
  // arr[0] = x; << 에러
  if (typeof x === "number") {
    arr[0] = x;
  }
}

function 내함수2(x: number | string) {
  let arr: number[] = [];
  arr[0] = x as number; //< type assertion
}

// assertion 문법의 용도
// 1. Narrowing 할 때 쓴다.

let 사람: string = "kim";
//사람 as number; << 에러. 이런거 하면 안댐
// 타입을 확정짓는 용도이지, 타입을 변경하는 용도가 아님.

//2. 무슨 타입이 들어올 지 100% 확실할 때 써야함.
내함수2("123"); // < 이런식으로 타입에러를 잡아주지 않음. 버그 추적이 불가능함
// Typescript의 룰을 무시하는거랑 똑같음. :any 타입이랑 비슷한 느낌
// 그래서 100% 확실할 때만 써야하는데 TS를 쓰면서 굳이 쓸 이유가 없음.
// 디버깅용으로만 쓰자

//3. 가끔 타입을 강제로 부여하는 기계를 만들어 쓰고 싶을 때 쓴다.

type Person = {
  name: string;
};
function 변환기<T>(data: string): T {
  return JSON.parse(data) as T;
}
const jake = 변환기<Person>('{"name":"kim"}');

// 이 함수에 자료를 입력하면 as 키워드로 T라는 타입을 하나 붙여준다.

// 5분숙제

function 숫자정리(arr: (number | string)[]) {
  let result: number[] = [];

  arr.forEach((a) => {
    if (typeof a === "string") {
      result.push(parseFloat(a));
    } else {
      result.push(a);
    }
  });
  return result;
}

console.log(숫자정리([1, "2", "3", 4, "5"]));

let 철수쌤: { subject: string } = { subject: "math" };
let 영희쌤: { subject: string[] } = { subject: ["science", "english"] };
let 민수쌤: { subject: string[] } = { subject: ["science", "art", "korean"] };

function 마지막과목(x: { subject: string } | { subject: string[] }) {
  if (typeof x.subject === "string") {
    return x.subject;
  } else if (Array.isArray(x.subject)) {
    return x.subject[x.subject.length - 1];
  }
}

console.log(마지막과목(철수쌤));
console.log(마지막과목(영희쌤));
console.log(마지막과목(민수쌤));

// type alias
type Animal = string | number | undefined;

let 동물: Animal = "lion";

type Animal1 = { name: string; age: number };

let 동물1: Animal1 = { name: "poppy", age: 4 };

type Girlfriend = { readonly name: string };

const 여친: Girlfriend = {
  name: "엠버",
};

//여친.name = "유라"; << readonly property를 쓰면 읽기전용(수정불가능)
// TS 에러는 에디터 & 터미널에서만 존재함
// 컴파일된 JS에서는 막아주지 않음.

type Name = string;
type Age = number;
type Person1 = Name | Age;

//Type Alias 로 만든 type또한 union type 처럼 합칠 수 있음

type PositionX = { x: number };
type PositionY = { y: number };
type Position = PositionX & PositionY; // ===  { x: number, y: number }

// & 연산자로 Object Type 또한 합칠 수 있음 ( &연산자로 object type extend )

let position: Position = { x: 10, y: 20 }; // 잘됨

// 같은 이름의 type alias는 재정의 불가능
type Ace = number;
// type Ace = string;  << 에러

//5분숙제

//(숙제1)
//object 타입을 정의한 type alias 두개를 & 기호로 합칠 때 중복된 속성이 있으면 어떻게 될까?

type Obj1 = { name: string };
type Obj2 = { name: number };
type NewObj = Obj1 & Obj2;

// let testObj1: NewObj = { name: 1 };     << 에러 (type 'never')
// let testObj2: NewObj = { name: "바보" };  << 에러 (type 'never')

//
// (숙제2)
// 1. 이 타입은 object 자료형이어야합니다.
// 2. 이 타입은 color 라는 속성을 가질 수도 있으며 항상 문자가 들어와야합니다.
// 3. 이 타입은 size 라는 속성이 있어야하며 항상 숫자가 들어와야합니다.
// 4. 이 타입은 position 이라는 변경불가능한 속성이 있어야하며 항상 숫자가 담긴 array 자료가 들어와야합니다.
// type alias로 만들어보셈

type 숙제2 = { color?: string; size: number; readonly position: number[] };
let 숙제테스트: 숙제2 = {
  size: 123,
  position: [1, 2],
};

// (숙제3) 다음을 만족하는 type alias를 연습삼아 간단히 만들어보십시오.
// 1. 대충 이렇게 생긴 object 자료를 다룰 일이 많습니다. { name : 'kim', phone : 123, email : 'abc@naver.com' }
// 2. object 안에 있는 이름, 전화번호, 이메일 속성이 옳은 타입인지 검사하는 type alias를 만들어봅시다.
// 3. 각 속성이 어떤 타입일지는 자유롭게 정하십시오.

type 숙제3 = { name: string; phone: number; email: string };
let user1: 숙제3 = {
  name: "kim",
  phone: 0801209141,
  email: "adklfj@gmail.com",
};

// (숙제4). 다음을 만족하는 type alias를 만들어보십시오.
// 1. 숙제2와 똑같은데 이번엔 이름, 전화번호, 이메일, 미성년자여부 속성을 옳은 타입인지 검사하는 type alias를 만들어봅시다.
// 2. 미성년자 여부 속성은 true/false만 들어올 수 있습니다.
// 3. 멋있게 숙제3에서 만들어둔  type alias를 재활용해봅시다.

type 숙제4 = 숙제3 & { isMinor: boolean };

let user2: 숙제4 = {
  name: "park",
  phone: 12314,
  email: "asdfkl@gmail.com",
  isMinor: true,
};
