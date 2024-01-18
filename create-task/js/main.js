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

function caloverprice(calories, price){
    let b = calories / price; 
    let c = Math.round(b * 100) / 100
    console.log(c)
    document.querySelector("h1").insertAdjacentHTML("beforeend", `<p>${c}</p>`)
}
caloverprice(1400, 5.99)

function asdasd(){
    if ((document.querySelector(".option") = "calories")) {
        caloverprice()
    }
};

function prooverprice(protein, price){
    let b = protein / price; 
    let c = Math.round(b * 100) / 100
    console.log(c)
    document.querySelector("h1").insertAdjacentHTML("beforeend", `<p>${c}</p>`)
}
prooverprice();

function proovercals(protein, calories){
    let b = protein / calories; 
    let c = Math.round(b * 100) / 100
    console.log(c)
    document.querySelector("h1").insertAdjacentHTML("beforeend", `<p>${c}</p>`)
}
proovercals();