// let vs Vs
function hello() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log("outside: " + i);
}
hello();
