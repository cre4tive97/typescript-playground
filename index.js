var 이름 = "최재문";
var 나이 = 24;
var 출생지역 = "울산";
var favMusic = {
    title: "시차",
    artist: "우원재",
};
var project = {
    member: ["kim", "park"],
    days: 30,
    started: true,
};
// union, unknown, any
var 회원들 = [1, "2", 3];
var 오브젝트 = { a: "123" };
var 이름1;
이름1 = 123;
이름1 = {};
var 어쩌고 = 이름1; // any는 type무시함
var 이름2;
이름2 = 123;
이름2 = [];
// let 어쩌고2: string = 이름2; << unknown은 타입 지켜줌
// unknown 타입은 연산 불가능
// TS에서는 연산도 엄격하게 적용됨.
var 나이1;
//나이1 + 1;        에러
var 나이2;
나이2 + 1; //잘됨
var 나이3;
나이3 + 1; // 잘됨
/*
string 타입 +1 (허용)
number 타입 +1 (허용)
string | number 타입 +1 (안됨)
*/
var user = "kim";
var age = undefined;
var married = false;
var 철수 = [user, age, married];
var 학교 = {
    score: [100, 97, 84],
    teacher: "Phil",
    friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];
function 함수(x) {
    return x * 2;
}
function 함수1(x) {
    //   return x % 2;  void는 return 없이만 가능, 함수 내부에 return이 있는지 체크할 때 쓰면 굿
}
//함수();   < 타입지정한 함수는 파라미터를 무조건 넣어야 함.
function 함수3(x) {
    return x + 2;
}
함수3(); // 함수 파라미터에 ?를 붙이면 파라미터가 있어도 되고 없어도 됨.
// ?의 원리
// 변수?:number === 변수 : number | undefined
// undefined가 합쳐진 union type 이라고 생각하면 된다
function 함수4(x) {
    // console.log(x + 3);  << 에러
}
// number | string 이라는 number도 아니고 string도 아닌 새로운 타입이라서 + 연산을 할 수 없음.
// 이걸 가능하게 하려면 Narrowing 로 타입을 확정해야한다.
//5분숙제
function 홍길동(x) {
    if (x) {
        console.log("\uC548\uB155\uD558\uC138\uC694 " + x);
    }
    else {
        console.log("이름이 없습니다");
    }
}
function 자릿수(x) {
    return x.toString().length;
}
function 결혼가능성(월소득, 집보유여부, 매력점수) {
    var score = 0;
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
function 내함수(x) {
    if (typeof x === "string") {
        return x + "1";
    }
    else {
        return x + 1;
    }
}
function 내함수1(x) {
    var arr = [];
    // arr[0] = x; << 에러
    if (typeof x === "number") {
        arr[0] = x;
    }
}
function 내함수2(x) {
    var arr = [];
    arr[0] = x; //< type assertion
}
// assertion 문법의 용도
// 1. Narrowing 할 때 쓴다.
var 사람 = "kim";
//사람 as number; << 에러. 이런거 하면 안댐
// 타입을 확정짓는 용도이지, 타입을 변경하는 용도가 아님.
//2. 무슨 타입이 들어올 지 100% 확실할 때 써야함.
내함수2("123"); // < 이런식으로 타입에러를 잡아주지 않음. 버그 추적이 불가능함
function 변환기(data) {
    return JSON.parse(data);
}
var jake = 변환기('{"name":"kim"}');
// 이 함수에 자료를 입력하면 as 키워드로 T라는 타입을 하나 붙여준다.
// 5분숙제
function 숫자정리(arr) {
    var result = [];
    arr.forEach(function (a) {
        if (typeof a === "string") {
            result.push(parseFloat(a));
        }
        else {
            result.push(a);
        }
    });
    return result;
}
console.log(숫자정리([1, "2", "3", 4, "5"]));
var 철수쌤 = { subject: "math" };
var 영희쌤 = { subject: ["science", "english"] };
var 민수쌤 = { subject: ["science", "art", "korean"] };
function 마지막과목(x) {
    if (typeof x.subject === "string") {
        return x.subject;
    }
    else if (Array.isArray(x.subject)) {
        return x.subject[x.subject.length - 1];
    }
}
console.log(마지막과목(철수쌤));
console.log(마지막과목(영희쌤));
console.log(마지막과목(민수쌤));
var 동물 = "lion";
var 동물1 = { name: "poppy", age: 4 };
var 여친 = {
    name: "엠버",
};
// & 연산자로 Object Type 또한 합칠 수 있음 ( &연산자로 object type extend )
var position = { x: 10, y: 20 }; // 잘됨
var 숙제테스트 = {
    size: 123,
    position: [1, 2],
};
var user1 = {
    name: "kim",
    phone: 0801209141,
    email: "adklfj@gmail.com",
};
var user2 = {
    name: "park",
    phone: 12314,
    email: "asdfkl@gmail.com",
    isMinor: true,
};
//
//
//
// Literal Types
// 더 엄격한 타입 지정 가능해짐
var 이름3;
이름3 = "kim";
// 이름3 = "park"; << 에러
var 숫자3;
숫자3 = 123;
// 숫자3 = 456; << 에러
var 접니다;
접니다 = "대머리";
접니다 = "솔로";
// 접니다 = "잘생김"; < 에러
// 왜쓰는가?
// 변수에 어떤 데이터가 들어올지 더 엄격하게 관리 가능 (버그 방지)
// 자동완성
function hello(a) {
    return 1;
}
hello("hello");
// hello("hi"); << 에러
function 가위바위보(a) {
    return [a];
}
console.log(가위바위보("보"));
// const 변수의 한계
// 재할당 불가능함
// Literal Types 를 사용하면, const 변수와 유사하게 사용 가능함
var 나;
나 = "대머리";
나 = "솔로";
// literal types 의 장점. 자료를 여러개 저장가능한 const 변수 느낌?
// literal types 의 문제점
var 자료 = {
    name: "kim",
};
자료.name; // <= "kim";
function myfunc(a) { }
myfunc("kim");
//myfunc(자료.name); << 에러.
// 왜 에러가 뜨냐면..
// myfunc(a: "kim") 에서 파라미터를 보면
// a: "kim"  이건 자료를 지정한게 아니라 "kim" 이라는 타입을 지정한것임.
// 그래서 자료.name 이건 타입이 :string 이라서 에러가 나는거임
//해결책
//1. 오브젝트에 타입지정을 한다
var 자료1 = {
    name: "kim",
};
myfunc(자료1.name); // < 잘됨
//2. asserstion 문법으로 타입을 강제한다
myfunc(자료.name);
//3. as const
var 자료2 = {
    name: "kim",
};
var 문자숫자 = function (a) {
    return 10;
};
var 회원정보 = {
    name: "kim",
    age: 30,
    plusOne: function (x) {
        return x + 1;
    },
    changeName: function () {
        console.log("안녕");
    },
};
회원정보.plusOne(1);
회원정보.changeName();
var cutZero = function (a) {
    if (a.indexOf("0") === 0) {
        var result = a.replace("0", "");
        return result;
    }
    else {
        return a;
    }
};
console.log(cutZero("0124"));
console.log(cutZero("00120"));
console.log(cutZero("10120"));
var removeDash = function (a) {
    if (a.indexOf("-") !== -1) {
        return parseFloat(a.replace(/-/gi, ""));
    }
};
console.log(removeDash("120-4128-1928"));
console.log(removeDash("123-12-445-2-"));
var newFunction = function (a, cutZero, removeDash) {
    var resultCutZero = cutZero(a);
    console.log(removeDash(resultCutZero));
};
newFunction("010-1111-2222", cutZero, removeDash);
