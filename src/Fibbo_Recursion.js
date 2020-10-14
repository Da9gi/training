function nthFibboNo(index) {
    return (index == 0 || index == 1) ? index : (nthFibboNo(index - 1) + (nthFibboNo(index - 2)));
}

let index = 40; 
console.log(nthFibboNo(index));