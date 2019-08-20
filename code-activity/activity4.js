console.log(`Question One -------------------------------`);
const reversedNum = num => {
    let newNum = (num.toString().split('').reverse(Math.sign(num)).join(''))
    console.log(`original: ${num} reversed: ${newNum}`)
}

reversedNum(8721)
reversedNum(1278)

console.log(`Question Two ------------------------------`);

const vowelCount = string => {
    const vowels = "aeiouAEIOU";
    let vowelCount = 0;

    for(let i = 0; i < string.length; i++) {
        if (vowels.indexOf(string[i]) !== -1) {
          vowelCount++;
        }
    }
    console.log(`The string "${string}" has ${vowelCount} vowels`) 
    return vowelCount
}

vowelCount('Emma');
vowelCount('Thomas');
vowelCount('Dinosaur');

console.log(`Question Three ----------------------------`);

const isPalindrome = string => {
    let normal = string.toLowerCase().match(/[a-z]/gi).reverse();
    let check = normal.join('') === normal.reverse().join('');
    
    if (check) {
        console.log(`The string "${string}" is a Palidrome!`)
    } else {
        console.log(`The string "${string}" is not a palidrome!`)
    }
}

isPalindrome('Madam');
isPalindrome('Anna');
isPalindrome('Thomas');

// Question 4 : "Outside"

// Question 5 : Yes they will return the same thing because each code block is the same!
