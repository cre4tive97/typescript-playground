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
