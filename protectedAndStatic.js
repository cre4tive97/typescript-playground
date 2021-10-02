// Protected
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User4 = /** @class */ (function () {
    function User4() {
        this.x = 10;
    }
    return User4;
}());
var NewUser = /** @class */ (function (_super) {
    __extends(NewUser, _super);
    function NewUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewUser.prototype.doThis = function () {
        this.x;
    };
    return NewUser;
}(User4));
// private x = 10; 이런식으로 쓰면
// 클래스 {} 에서만 x를 수정할 수 있음
// 그래서 extends 해도 x 값을 이용,수정 할 수 없음
// protected는 private랑 비슷한데..
// 조금 더 확장가능하게 만들어줌
// extends 가능해짐
// 정리
// protected : extends 된 class는 사용 가능, 자식들 사용 불가능
// private : extends 된 class는 사용 불가능, 자식들 사용 불가능
//
//
// Static
var User5 = /** @class */ (function () {
    function User5() {
        this.y = 20;
    }
    User5.x = 10;
    return User5;
}());
var 자식 = new User5();
console.log(자식); // < x 없음
console.log(User5.x);
// static 키워드 붙이면 부모 class에 직접 부여됨
// 자식들은 사용할 수 없음.
// Static 속성은 public, protected, private 에 동시에 쓸 수 있음
var User6 = /** @class */ (function () {
    function User6() {
        this.y = 10;
    }
    User6.x = 10;
    return User6;
}());
var 자식2 = new User6();
console.log(자식2);
//활용은 어떻게?
var Expert = /** @class */ (function () {
    function Expert() {
        this.intro = Expert.skill + " \uC804\uBB38\uAC00\uC785\uB2C8\uB2E4.";
    }
    Expert.skill = "js";
    return Expert;
}());
var 철수 = new Expert();
console.log(철수);
Expert.skill = "ts";
var 영희 = new Expert();
console.log(영희);
// 5분숙제..
//(숙제1) 다음 x, y, z 속성의 특징을 설명해보십시오.
var Position = /** @class */ (function () {
    function Position() {
        this.z = 30;
    }
    Position.x = 10;
    Position.y = 20;
    return Position;
}());
// x: 부모만 사용가능, class 내부에서만 수정 가능
// y: 부모만 사용 가능, Position.y = ?? 로 수정 가능
// z: 부모만 사용 가능, extends 한 클래스의 {} 안에서 수정 가능
// (숙제2) x 속성에 숫자를 더해주는 함수가 필요합니다.
var Position1 = /** @class */ (function () {
    function Position1() {
    }
    Position1.addOne = function (a) {
        Position1.x += a;
        console.log("X:", Position1.x);
    };
    Position1.printX = function () {
        console.log(Position1.x);
    };
    Position1.x = 10;
    Position1.y = 20;
    return Position1;
}());
Position1.addOne(3); //이렇게 하면 x가 3 더해져야함
Position1.addOne(4); //이렇게 하면 x가 4 더해져야함
Position1.printX(); //이렇게 하면 콘솔창에 x값이 출력되어야함
// 저렇게 User.addOne() 쓸 때마다 x가 증가하는 함수는 어떻게 만들 수 있을까요?
// 그리고 x값을 콘솔창에 출력해주는 printX() 함수도 한번 만들어보십시오.
// (조건) private static x = 10; 이 코드 수정금지
//(숙제3) 이런거 어떻게 만들게요
// let 네모 = new Square(30, 30, 'red');
// 네모.draw()
// 네모.draw()
// 네모.draw()
// 네모.draw()
// 이렇게 네모.draw()를 할 때마다
// index.html에 가로 30px, 세로 30px, 배경색이 'red' 의 <div> 박스가 무작위로 배치되어야합니다.
var Square = /** @class */ (function () {
    function Square(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    Square.prototype.draw = function () {
        var a = Math.random();
        var square = "<div style=\"\n    position:relative; \n    top:" + a * 400 + "px; \n    left:" + a * 400 + "px;\n    width:" + this.width + "px;\n    height:" + this.height + "px;\n    background:" + this.color + "\"></div>";
        document.body.insertAdjacentHTML("beforeend", square);
    };
    return Square;
}());
var square = new Square(40, 40, "pink");
square.draw();
square.draw();
square.draw();
square.draw();
square.draw();
square.draw();
square.draw();
square.draw();
square.draw();
square.draw();
square.draw();
