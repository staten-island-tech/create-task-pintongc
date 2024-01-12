import { menu } from "./nutritionfacts";

const calperpro = menu.forEach((item) => console.log(item.calories / item.protein))
console.log(calperpro);

const calories = 1094
const protein = 56

function math(calories, protein){
    const a = calories / protein;
    console.log(a);
    return[a];
};

math(calories, protein);

