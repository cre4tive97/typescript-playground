// Protected

class User4 {
  protected x = 10;
}

class NewUser extends User4 {
  doThis() {
    this.x;
  }
}

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

class User5 {
  static x = 10;
  y = 20;
}

let 자식 = new User5();
console.log(자식); // < x 없음
console.log(User5.x);

// static 키워드 붙이면 부모 class에 직접 부여됨
// 자식들은 사용할 수 없음.

// Static 속성은 public, protected, private 에 동시에 쓸 수 있음

class User6 {
  private static x = 10;
  y = 10;
}

let 자식2 = new User6();
console.log(자식2);

//활용은 어떻게?

class Expert {
  static skill = "js";
  intro = `${Expert.skill} 전문가입니다.`;
}

let 철수 = new Expert();
console.log(철수);

Expert.skill = "ts";

let 영희 = new Expert();
console.log(영희);

// 5분숙제..

//(숙제1) 다음 x, y, z 속성의 특징을 설명해보십시오.
class Position {
  private static x = 10;
  public static y = 20;
  protected z = 30;
}

// x: 부모만 사용가능, class 내부에서만 수정 가능
// y: 부모만 사용 가능, Position.y = ?? 로 수정 가능
// z: 부모만 사용 가능, extends 한 클래스의 {} 안에서 수정 가능

// (숙제2) x 속성에 숫자를 더해주는 함수가 필요합니다.
class Position1 {
  private static x = 10;
  public static y = 20;

  static addOne(a: number) {
    Position1.x += a;
    console.log("X:", Position1.x);
  }
  static printX() {
    console.log(Position1.x);
  }
}
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

class Square {
  constructor(
    public width: number,
    public height: number,
    public color: string
  ) {}
  draw() {
    let a = Math.random();
    let square = `<div style="
    position:relative; 
    top:${a * 400}px; 
    left:${a * 400}px;
    width:${this.width}px;
    height:${this.height}px;
    background:${this.color}"></div>`;
    document.body.insertAdjacentHTML("beforeend", square);
  }
}

let square = new Square(40, 40, "pink");
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
