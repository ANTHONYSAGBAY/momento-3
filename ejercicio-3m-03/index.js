'use strict';

let nums = [0, 2, 4, 8];

for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
        let num1 = nums[i];
        let num2 = nums[j];
        alert(num1 + '' + num2);
    }
}
