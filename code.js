const testHtml = document.querySelector(".test");
const resultHtml = document.querySelector(".result");
const choixHtml = document.querySelector(".userInput input");
const reloadHtml = document.querySelector(".reload");
let randomNumber = Math.floor(Math.random() * 101);
/* console.log(randomNumber); */

function jouer() {
    let n = Number(choixHtml.value);
    if (n === randomNumber) {
        resultHtml.textContent = "Bravo";
    } else if (n>100 || n<0) {
        alert("J'ai dis entre 0 et 100 banane")
    } 
    else {
        mauvaisChoix(n);
    }
    choixHtml.value = "";
}

function mauvaisChoix(n) {
    if (n < randomNumber) {
        resultHtml.textContent = "Essayez plus haut";
    } else {
        resultHtml.textContent = "Essayez plus bas";
    }
}

testHtml.addEventListener("click", jouer);

reloadHtml.addEventListener("click", () => {
    randomNumber = Math.floor(Math.random() * 101);
    /* console.log(randomNumber); */
    resultHtml.textContent = "";
    choixHtml.value = "";
});

choixHtml.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        jouer();
    }
});

