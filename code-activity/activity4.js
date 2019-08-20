console.log(`Question One -------------------------------`);
const reversedNum = num => {
    if (num > 0) {
        let newNum = num.toString().split('').reverse().join('')
        console.log(`original: ${num} reversed: ${newNum}`)
    } else {
        let newNum = num.toString().split('').reverse(Math.sign(num)).join('')
        let newArray = newNum.split('');
        let negative =  newArray[newArray.length - 1];
        newArray.pop(negative);
        newArray.unshift(negative);
        const newValue = newArray.join('')
        console.log(`original: ${num} reversed: ${newValue}`)
    }
}

reversedNum(-8721)
reversedNum(1278)

console.log('');
console.log(`Question Two ------------------------------`);

const vowelCount = string => {
    const vowels = "aeiou";
    const newString = string.toLowerCase()
    let vowelCount = 0;

    for(let i = 0; i < newString.length; i++) {
        if (vowels.indexOf(newString[i]) !== -1) {
          vowelCount++;
        }
    }

    console.log(`The string "${string}" has ${vowelCount} vowels`) 
    return vowelCount
}

vowelCount('Emma');
vowelCount('Thomas');
vowelCount('Dinosaur');

console.log('');
console.log(`Question Three ----------------------------`);

const isPalindrome = str => {
    let string = str.toLowerCase()
    let reversed = string.split("").reverse().join("");
    return reversed === string ? console.log(`The string "${string}" is a Palidrome!`) : console.log(`The string "${string}" is not a palidrome!`);
}

isPalindrome('Madam');
isPalindrome('Anna');
isPalindrome('Thomas');
isPalindrome('Emma');

// Question 4 : "Outside"

// Question 5 : Yes they will return the same thing because each code block is the same!
