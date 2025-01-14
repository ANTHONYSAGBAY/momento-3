'use strict';

let nums = [0, 2, 4, 8];

for (let num1 of nums) {
    for (let num2 of nums) {
        alert(`${num1}${num2}`);
    }
}