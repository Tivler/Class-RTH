const myFarm = ["chickens", "pigs", "cows", "horses","ostriches"];

for (let i = 0; i < myFarm.length; i++) {
    if (myFarm[i].charAt(0) === 'c') {
        alert(`${myFarm[i]} Starts with c`)
    } else if(myFarm[i].charAt(0) === 'o') {
        alert(`${myFarm[i]} Starts with o`)
    } else {
        console.log(`${myFarm[i]} do not start with C or O`);
    }
}