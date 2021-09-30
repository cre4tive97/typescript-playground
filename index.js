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
