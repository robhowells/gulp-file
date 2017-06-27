(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{"./modules/module.js":2}],2:[function(require,module,exports){
"use strict";

var myModule = function myModule(value) {
    console.log("Code loaded from module testing.js");
    return value * value;
};

module.exports = myModule;
},{}]},{},[1]);
