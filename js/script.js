var button = document.querySelector(".show-cat");
console.log(button);

var cat = document.querySelector("figure.cat");
// console.log(cat);

const h1 = document.querySelector("h1");

button.addEventListener("click", function () {
    if (cat.classList.contains("show")) {
        cat.classList.remove("show");
        button.innerText = "Wait, come back!";
        button.classList.add("disappear");
        h1.innerText = "Hidden Menace";
    } else {
        cat.classList.add("show");
        button.innerText = "Disappear!";
        button.classList.remove("disappear");
        h1.innerText = "Crouching Tiger";
    }
});
