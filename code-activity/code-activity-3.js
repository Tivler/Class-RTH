const rvColors = ["red", "black", "grey", "white"];

let newColors = rvColors.map(color => {
    let [first , ...rest] = color
    first = first.toUpperCase()
    return [first, ...rest].join("")
})

const newColor = newColors.join()

const colors = newColor.replace(/,/g, ' ');

console.log(colors);