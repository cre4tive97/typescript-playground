var _a = {
    student: true,
    age: 20,
}, student = _a.student, age = _a.age;
function 함수(_a) {
    var student = _a.student, age = _a.age;
    console.log(student, age);
}
함수({ student: true, age: 20 });
// 5분 숙제
// (숙제1) 숫자 여러개를 입력하면 최댓값을 return 해주는 함수를 만들어봅시다.
// 최댓값(6,3,7,2) 이렇게 쓰면 7이 return 되어야합니다.
// (조건1) 넣을 수 있는 숫자 갯수는 제한없음, 0 이상의 정수만 가능합니다.
// (조건2) Math.max() 사용금지 반복문이나 쓰셈
function calculateMax() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    var result = 0;
    items.forEach(function (a) {
        if (a > result) {
            result = a;
        }
    });
    return result;
}
console.log(calculateMax(1, 2, 3, 5, 2, 4, 2, 1, 8, 1, 24));
function 숙제2(_a) {
    var user = _a.user, comment = _a.comment, admin = _a.admin;
    console.log(user, comment, admin);
}
숙제2({ user: "kim", comment: [3, 5, 4], admin: false });
function 숙제3(_a) {
    var a = _a[0], b = _a[1], c = _a[2];
    console.log(a, b, c);
}
숙제3([40, "wine", false]);
