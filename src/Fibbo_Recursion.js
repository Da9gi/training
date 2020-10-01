function nthFibboNo(index) {
    return (index == 0 || index == 1) ? index : (nthFibboNo(index - 1) + (nthFibboNo(index - 2)));
}

index = prompt("Enter the index ", "");
alert(nthFibboNo(index));