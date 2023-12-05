// Nom : 
// Prénom : 
// Groupe :

document.documentElement.classList.add("js-enabled");

const numbers = [];

for (let i = 1; i <= 200; i += 2) {
    numbers.push(i);
    //console.log(i);
}

//console.log(numbers);

const orderedList = document.getElementById("app");

for (let j = 0; j < numbers.length; j++) {
    const list = document.createElement("li");
    list.textContent = numbers[j];
    list.classList.add("grid__item");
    orderedList.appendChild(list);
    //console.log(j);
}

function estNombrePremier(number) {
    if (number < 2) {
        return false;
    }
    for (let k = 2; k <= number / 2; k++) {
        if (number % k === 0) {
            return false;
        }
    }
    return true;
}

for (let l = 0; l < numbers.length; l++) {
    if (estNombrePremier(numbers[l])) {
        //console.log(`${numbers[l]} est un nombre premier.`);
    }
}

document.querySelectorAll("li").forEach((element) => {
    const nombre = parseInt(element.textContent);
    /*
    if (estNombrePremier(nombre)){
        element.classList.add("premier");
    }
    */
    element.classList.toggle("premier", estNombrePremier(nombre));
});

const premiers = document.querySelectorAll(".premier");
premiers.forEach((premier) => {
    const ribbonWrapper = document.createElement("div");
    ribbonWrapper.classList.add("ribbon-wrapper");
    premier.appendChild(ribbonWrapper);
});

const wrappers = document.querySelectorAll(".ribbon-wrapper");

wrappers.forEach((wrapper) => {
    const ribbon = document.createElement("div");
    ribbon.textContent= "premier";
    ribbon.classList.add("ribbon");
    wrapper.appendChild(ribbon);
})

function divisibleParTrois(number){
    if (number <= 3){
        return false;
    }
    return number % 3 === 0;
}

document.querySelectorAll("li").forEach((element) => {
    const nombre = parseInt(element.textContent);
    element.classList.toggle("multiple-3", divisibleParTrois(nombre));
});

const divisibleTrois= document.querySelectorAll(".multiple-3");

divisibleTrois.forEach((element) => {
    const ribbonWrapper = document.createElement("div");
    ribbonWrapper.classList.add("ribbon-wrapper");
    element.appendChild(ribbonWrapper);
});

const trois = document.querySelectorAll(".multiple-3 .ribbon-wrapper");

trois.forEach((element) => {
    const ribbon = document.createElement("div");
    ribbon.textContent= "3";
    ribbon.classList.add("ribbon");
    element.appendChild(ribbon);
})

function divisibleParTroisEtNeuf(number){
    return number % 3 === 0 && number % 9 === 0;
}

document.querySelectorAll("li").forEach((element) => {
    const nombre = parseInt(element.textContent);
    element.classList.toggle("multiple-3-9", divisibleParTroisEtNeuf(nombre));
    //element.classList.add("multiple-3-9");
});

/*

const divisibleTroisEtNeuf= document.querySelectorAll(".multiple-3-9");

divisibleTroisEtNeuf.forEach((element) => {
    const ribbonWrapper = document.createElement("div");
    ribbonWrapper.classList.add("ribbon-wrapper");
    element.appendChild(ribbonWrapper);
});

*/

const neuf = document.querySelectorAll(".multiple-3-9 .ribbon-wrapper .ribbon");

neuf.forEach((element) => {
    //const ribbon = document.createElement("div");
    element.textContent= "3 et 9";
    //ribbon.classList.add("ribbon");
    //element.appendChild(ribbon);
})