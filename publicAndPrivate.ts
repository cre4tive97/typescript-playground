class User {
  public name = "kim";
  constructor(a) {
    this.name = a;
  }
}

let user1 = new User("park");
user1.name = "안녕";

// class 에서 쓰는 public
// public 있으면 모든 자식들이 이용, 수정 가능
// 생략으로 대체 가능함.

//

class User1 {
  private name = "kim";
  constructor(a) {
    this.name = a;
  }
}

let user2 = new User1("kim");
//user2.name; < 에러 뜸

// class 에서 쓰는 private
// private 붙으면, class 안에서만 이용, 수정 가능함.

class Name {
  name: string;
  private familyName: string = "Kim";
  constructor(name) {
    this.name = this.familyName + name;
  }
  changeFamilyName(a: string) {
    this.familyName = a;
  }
}

let name1 = new Name("민수");
console.log(name1); // {famillyName: 'Kim', name : 'Kim민수'}
name1.changeFamilyName("Park");
console.log(name1); // {familyName: 'Park', name : 'Kim민수'}

//
//
//
// public을 잘 쓰면 constructor도 생략가능함.

class Person2 {
  constructor(public name: string, public age: number) {}
}
let person3 = new Person2("Kim", 24);

console.log(person3);
