let rows = 8;
let pattern = "";

for (let i = 1; i < rows / 2; i++) {

    for (let j = 1; j <= i; j++) {
        pattern += "*";
    }

    for (let j = 1; j <= rows - (2 * i); j++) {
        pattern += " ";
    }

    for (let j = 1; j <= i; j++) {
        pattern += "*";
    }
    pattern += "\n";
}

for (let i = rows / 2; i > 0; i--) {

    for (let j = 1; j <= i; j++) {
        pattern += "*";
    }

    for (let j = 1; j <= rows - (2 * i); j++) {
        pattern += " ";
    }

    for (let j = 1; j <= i; j++) {
        pattern += "*";
    }
    pattern += "\n";
}

console.log(pattern);
