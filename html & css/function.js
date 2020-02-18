// one way to declare the function
function addNumber(a, b) {
    console.log(this.a + this.b);
}
// second way 
var output = function (name) {
    console.log("hello");
};
// third way
var output2 = {};
console.log("hello 2");
// fourth way
var sum = {};
10 + 20;
console.log(sum);
