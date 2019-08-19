const rvColors = ["red", "black", "grey", "white"];

const newColors = rvColors.join()

const colors = newColors.replace(/,/g, ' ');

console.log(colors);