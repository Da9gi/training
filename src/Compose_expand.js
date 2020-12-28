//const compose = (...fns) => arg => fns.reduce((composed, f) => f(composed), arg); 


let comp = function(...fns) { 
    return function(arg) {
    return fns.reduce(function(composed, f) {
    return f(composed);
    }, arg);
    }
    }


const f1 = (val) => {
    let resArr = val.map((item) => item*3);
    return resArr;
}

const f2 = (val) => {
    let resArr = val.map((item) => item+2);
    return resArr;
}

const f3 = (val) => {
    console.log(val);
    return val;
}

let arr = [1, 2, 3, 4];
const res = comp(f3, f1, f2)(arr);
console.log(res);



    