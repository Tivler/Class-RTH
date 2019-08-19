const odd = [1,3,5,7,9]
const even = [2,4,6,8,10]

const nums = [...odd, ...even]

console.log(nums)

function sortNumber(a, b) {
    return a - b;
}

const allNums = nums.sort(sortNumber);
console.log(allNums);

alert(allNums[8]);
alert(allNums[3]);

console.log(allNums);