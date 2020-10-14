let count = 1;
function pattern(n) {
    if ( n ) {
        console.log("  ".repeat(n-1),"* ".repeat(count++)); 
        pattern(n-1);
    }
}
pattern(10);