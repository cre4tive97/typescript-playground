// Narrowing Technique
//1.  && 연산자 쓰면 undefined narrowing 하기 쉬움

function and(a: string | undefined) {
  if (a && typeof a === "string") {
  }
}

//2. 다른 속성을 가진 오브젝트를 narrowing 하려면 in

type Fish = { swim: string };
type Bird = { fly: string };

function animal(animal: Fish | Bird) {
  if ("swim" in animal) {
    animal.swim;
  }
}

//3. Object instanceof ParentClass

let date = new Date();
if (date instanceof Date) {
}

//4. 같은 속성을 공유하는 타입 Narrowing 할때에는 literal type을 만들어두셈
// 근데 그냥 같은속성 공유할 타입을 만들지 않는게 좋음

type Car1 = {
  model: 4;
  wheel: "4개";
  color: string;
};
type Bike = {
  wheel: "2개";
  color: string;
};

function vehicle(x: Car1 | Bike) {
  if (x.wheel === "4개") {
  }
}
