export {};

//(숙제1) 다음 타입을 변환기를 돌려보십시오.
// type Bus = {
//     color : string,
//     model : boolean,
//     price : number
//   }
//   동료가 잘못 만든 타입입니다.
//   color, model, price 속성은 전부 string 또는 number 타입이어야합니다.
//   1. 변환기 하나 만드시고
//   2. 기존 Bus 타입을 변환기 돌려서 위 조건을 충족하는 새로운 타입을 하나 만들어보십시오.

type Bus = {
  color: string;
  model: boolean;
  price: number;
};

type TypeMapper<T> = {
  [key in keyof T]: string | number;
};

type NewType = TypeMapper<Bus>;

// (숙제2) 이런 변환기는 어떻게 만들어야할까요?
// object안에 들어있는 모든 속성을
// string, number 이렇게 고정된 타입으로 변환해주는게 아니라
// 내가 원하는 타입을 입력하면 그걸로 변환해주는 범용성 좋은 변환기를 만들어보십시오.

type NiceType<MyType, T> = {
  [key in keyof MyType]: T;
};

let 오브젝트 = {
  name: "123",
  gender: "male",
  home: true,
  age: 21,
};

type NewNiceType = NiceType<Bus, string>;
type NewNiceType2 = NiceType<Bus, number>;
