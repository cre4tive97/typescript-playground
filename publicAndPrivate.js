var User = /** @class */ (function () {
    function User(a) {
        this.name = "kim";
        this.name = a;
    }
    return User;
}());
var user1 = new User("park");
user1.name = "안녕";
// class 에서 쓰는 public
// public 있으면 모든 자식들이 이용, 수정 가능
// 생략으로 대체 가능함.
//
var User1 = /** @class */ (function () {
    function User1(a) {
        this.name = "kim";
        this.name = a;
    }
    return User1;
}());
var user2 = new User1("kim");
//user2.name; < 에러 뜸
// class 에서 쓰는 private
// private 붙으면, class 안에서만 이용, 수정 가능함.
var Name = /** @class */ (function () {
    function Name(name) {
        this.familyName = "Kim";
        this.name = this.familyName + name;
    }
    Name.prototype.changeFamilyName = function (a) {
        this.familyName = a;
    };
    return Name;
}());
var name1 = new Name("민수");
console.log(name1); // {famillyName: 'Kim', name : 'Kim민수'}
name1.changeFamilyName("Park");
console.log(name1); // {familyName: 'Park', name : 'Kim민수'}
//
//
//
// public을 잘 쓰면 constructor도 생략가능함.
var Person2 = /** @class */ (function () {
    function Person2(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person2;
}());
var person3 = new Person2("Kim", 24);
console.log(person3);
