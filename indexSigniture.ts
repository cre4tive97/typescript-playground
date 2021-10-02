//(숙제1) 다음 자료의 타입을 지정해보십시오.
// let obj = {
//     model : 'k5',
//     brand : 'kia',
//     price : 6000,
//     year : 2030,
//     date : '6월',
//     percent : '5%',
//     dealer : '김차장',
//   }

// 귀찮으니까 한번에 지정하기 위해 index signature 이걸 써봅시다.

export {};

interface Obj {
  [key: string]: string | number;
}

let obj: Obj = {
  model: "k5",
  brand: "kia",
  price: 6000,
  year: 2030,
  date: "6월",
  percent: "5%",
  dealer: "김차장",
};

//(숙제2) 다음 object 자료의 타입을 interface 써서 만들어보십시오.
// let obj = {
//     'font-size' : 10,
//     'secondary' : {
//       'font-size' : 12,
//       'third' : {
//         'font-size' : 14
//       }
//     }
//   }

// object 안에 object 안에 object가 들어있습니다.
// 타입지정 해보도록 합시다. 물론 비슷한 object들이 더 중첩되어도 가능하게 recursive한 타입을 써보는건 어떨까요.

interface Obj1 {
  "font-size": number;
  [key: string]: Obj1 | number;
}

let obj1: Obj1 = {
  "font-size": 10,
  secondary: {
    "font-size": 12,
    third: {
      "font-size": 14,
    },
  },
};
