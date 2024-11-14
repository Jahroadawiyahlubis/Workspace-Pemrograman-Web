function sayHello() {
    document.write("Hello Folks! <br>");
}
sayHello();

function sayHelloWithParams(firstName, lastName = 'Doe') {
    document.write("Hello " + firstName + " " + lastName + "! <br>");
}
sayHelloWithParams('john');
sayHelloWithParams('john', 'smith');

let hello = function (name){
    document.write("Hello" + " " + name + " !</br>");
}
hello('Andre');

function outerFunction(outerParams) {
    function innerFunction(innerParams){
        document.write("Outer Params: " + outerParams + "<br>");
        document.write("Inner Params: " + innerParams + "<br>");
    }
    innerFunction('inner');
}
outerFunction('outer');
innerFunction('inner');

const greet = (name) => {
    document.write("Hello " + name + "! <br>");
    document.write("Hello " + name + "! <br>");
}
greet('Yaya');

function outerFunction(outerParams) {
    return function innerFunction(innerParams){
        document.write("Outer Params: " + outerParams + "<br>");
        document.write("Inner Params: " + innerParams + "<br>");
    }
}
const newFunction = outerFunction('Outer');
newFunction();
newFunction('Inner');
newFunction('Outer');