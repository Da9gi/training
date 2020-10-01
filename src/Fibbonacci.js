function nthFibboNo(index) {
    let fn = 1;
    let f = 0;
    let temp;
    if (index == 0 || index == 1) {
        return index;
    }
    else {
        for(let i = 2; i<= index; i++) {
            temp = fn;
            fn = fn + f;
            f = temp;
        }
        return fn;
    }
}

index = prompt("Enter the index ", "");
alert(nthFibboNo(index));