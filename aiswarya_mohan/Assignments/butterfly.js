let rows = 8;
let pattern = "";

// Upper
for (let i = 1; i <= rows / 2; i++) {
    // Left
    for (let j = 1; j <= i; j++) {
        pattern += "*";
    }
    // Spaces
    for (let j = 1; j <= rows - 2 * i; j++) {
        pattern += " ";
    }
    // Right
    for (let j = 1; j <= i; j++) {
        pattern += "*";
    }
    pattern += "\n";
}

// Lower
for (let i = rows / 2; i > 0; i--) {
    // Left
    for (let j = 1; j <= i; j++) {
        pattern += "*";
    }
    // Spaces
    for (let j = 1; j <= rows - 2 * i; j++) {
        pattern += " ";
    }
    // Right
    for (let j = 1; j <= i; j++) {
        pattern += "*";
    }
    pattern += "\n";
}

console.log(pattern);

