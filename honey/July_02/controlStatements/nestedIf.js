let a = 1;
let b = 2;
let c = 3;
if (a > b) {
    if (a > c) {
        console.log("a = " + a + " is greater than b = " + b + " & c = " + c);

    } else if (b > c) {
        console.log("b = " + b + " is greater than a = " + a + " & c = " + c);
    }

} else {
    console.log("c = " + c + " is greater than a = " + a + " & b = " + b);
}