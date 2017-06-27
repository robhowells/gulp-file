"use strict";

var myModule = require("./modules/module.js");

var const1 = 1;
var const2 = 2;

// Single expression
var sum1 = function sum1(param1, param2) {
    return param1 + param2;
};

// Multiple expressions
var sum2 = function sum2(param1, param2) {
    var paramSum = param1 + param2;

    return paramSum * const1;
};

// No paramters
var sum3 = function sum3() {
    return const1 + const2;
};

sum1(const1, const2);
sum2(const1, const2);
sum3();

// Imported module
myModule();