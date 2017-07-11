const myModule = require("./modules/module.js");

const const1 = 1;
const const2 = 2;

// Single expression
const sum1 = (param1, param2) => param1 + param2;

// Multiple expressions
const sum2 = (param1, param2) => {
	const paramSum = param1 + param2;

	return paramSum * const1;
};

// No paramters
const sum3 = () => const1 + const2;

sum1(const1, const2);
sum2(const1, const2);
sum3();

// Imported module
myModule.init(const1);
