/* Create a new function, changeColor(). */
function changeColor() {
    var divElement1 = document.getElementById("div1");
    var divElement2 = document.getElementById("div2");

    divElement1.className = "purple";
    divElement2.className = "yellow";
}

/* Change Div Text Content with Buttons */
function changeText() {
    var divElement1 = document.getElementById("div1");
    var divElement2 = document.getElementById("div2");

    divElement1.innerHTML = "Nǐ hǎo!";
    divElement2.innerHTML = "Zài jiàn!";
}

/* Extra Challenge! */
function colorText() {
    var divElement1 = document.getElementById("div1");
    var divElement2 = document.getElementById("div2");

    divElement1.style.color = "#000000";
    divElement2.style.color = "#000000";
}

function changeButton() {
    var changedButton = document.getElementById("change-button");
    changedButton.value = "Changed button!";
}