//const compose = (...fns) => arg => fns.reduce((composed, f) => f(composed), arg); 


let comp = function(...fns) { 
    return function(arg) {
    return fns.reduce(function(composed, f) {
    return f(composed);
    }, arg);
    }
    }


    