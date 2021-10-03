export {};

// 삼항연산

type Age<T> = T extends string ? T : unknown;

let a: Age<string>; // string
let b: Age<number>; // unknown

type FirstItem<T> = T extends any[] ? T[0] : any;

let age1: FirstItem<string[]>;
let age2: FirstItem<number>;

// infer

type Infer<T> = T extends infer R ? R : unknown;

type c = Infer<string>;

type 인퍼<T> = T extends (infer R)[] ? R : unknown;

type New인퍼 = 인퍼<string[]>; // string

type 함수<T> = T extends () => infer R ? R : unknown;

type New함수 = 함수<() => number>; // void

type 리턴타입 = ReturnType<() => string>; // string

// 5분숙제

// (숙제1) 타입 파라미터로
// 1. array 타입을 입력하면
// 2. array의 첫 자료가 string이면 string 타입을 그대로 남겨주고
// 3. array의 첫 자료가 string이 아니면 unknown 을 남겨주려면 어떻게 타입을 만들어놔야할까요?
// (동작예시)

// let age1 :Age<[string, number]>;
// let age2 :Age<[boolean, number]>;
// 이러면 age1의 타입은 string, age2의 타입은 unknown이 되어야합니다. (array나 tuple이나 그게 그거임)

// 이걸 만족하는 type Age를 만들어봅시다.

type 숙제1<T> = T extends [string, ...any] ? string : unknown;

let age3: 숙제1<[string, number]>;
let age4: 숙제1<[boolean, number]>;

//(숙제2) 함수의 파라미터의 타입을 뽑아주는 기계를 만들어보십시오.
// 타입뽑기<(x :number) => void> //이러면 number가 이 자리에 남음
// 타입뽑기<(x :string) => void> //이러면 string이 이 자리에 남음
// 아무튼 함수의 파라미터타입이 남아야합니다.

type 타입뽑기<T> = T extends (x: infer R) => any ? R : any;

type 뽑기1 = 타입뽑기<(x: number) => void>; // number
type 뽑기2 = 타입뽑기<(x: string) => void>; // string
