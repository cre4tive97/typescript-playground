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
