'use strict';

const number = process.argv[2] || 0;

let kaijo = 1;

for (let i = 1; i <= number; i++){
	kaijo = kaijo * i;
}

console.log(kaijo);