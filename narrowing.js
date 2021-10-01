// Narrowing Technique
//1.  && 연산자 쓰면 undefined narrowing 하기 쉬움
function and(a) {
    if (a && typeof a === "string") {
    }
}
function animal(animal) {
    if ("swim" in animal) {
        animal.swim;
    }
}
//3. Object instanceof ParentClass
var date = new Date();
if (date instanceof Date) {
}
function vehicle(x) {
    if (x.wheel === "4개") {
    }
}
