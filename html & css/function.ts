// one way to declare the function
function addNumber(a: Number, b:Number)
{
    console.log(this.a + this.b);
}

// second way 
let output = (name) =>
{
    console.log("hello");
}

// third way
let output2 = {} => console.log("hello 2");

// fourth way
let sum = {} => 10+20;
console.log(sum);