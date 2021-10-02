// 오브젝트에 타입지정하려면 interface 문법도 있음
var 학생 = { name: "kim" };
var 선생 = { name: "kim", age: 20 };
var 선생1 = { name: "kim", age: 30 };
var 고양이 = { name: "poppy", age: 4 };
var student1 = { name: "Choi", score: 50 };
var 상품 = {
    brand: "Samsung",
    serialNumber: 1360,
    model: ["TV", "phone"],
};
var 장바구니 = [
    { product: "청소기", price: 7000 },
    { product: "삼다수", price: 800 },
];
console.log(장바구니);
var newCart = { product: "청소기", price: 7000, card: false };
var 오브젝트 = { plus: function (a, b) { return a + b; }, minus: function (a, b) { return a - b; } };
