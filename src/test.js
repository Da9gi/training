function evalPossibilities(numbers) {
    let operands = {
        0: "+",
        1: "-",
        2: "",
    };
    let flag = "";
    let try1 = "";

    for (let i = 0; i <= Math.pow(3, numbers.length - 1); i++) {
        flag = ("00000000" + i.toString(3)).substr(-8, 8).split("").map((element) => parseInt(element));;
        try1 =
            "1" +
            operands[flag[0]] +
            "2" +
            operands[flag[1]] +
            "3" +
            operands[flag[2]] +
            "4" +
            operands[flag[3]] +
            "5" +
            operands[flag[4]] +
            "6" +
            operands[flag[5]] +
            "7" +
            operands[flag[6]] +
            "8" +
            operands[flag[7]] +
            "9";
        
        if (eval(try1) === 100) {
            console.log(try1);
        }
    }
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
evalPossibilities(numbers);
