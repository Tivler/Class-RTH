const rvColors = ["red", "black", "grey", "white"];

let newColorsArray = rvColors.map(color => {
    let [firstLetter , ...remainingLetters] = color;
    console.log(firstLetter)
    console.log(...remainingLetters);
    firstLetter = firstLetter.toUpperCase();
    return [firstLetter, ...remainingLetters].join("");
})

const newColors = newColorsArray.toString()

const colors = newColors.replace(/,/g, ' ');

console.log(colors);