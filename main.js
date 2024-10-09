const text = document.querySelector(".text");
const show = document.getElementById("show");
const remove = document.getElementById("remove");
const inputField = document.getElementById("inputField");
const changeTextButton = document.getElementById("changeTextButton");
const clickCountDisplay = document.getElementById("clickCount");
const changeStyleButton = document.getElementById("changeStyleButton");
const checkInputButton = document.getElementById("checkInputButton");
const errorMessage = document.getElementById("errorMessage");

let clickCount = 0; 
let isStyled = false; 

show.addEventListener('click', function () {
    text.style.display = 'block';
});

remove.addEventListener('click', function () {
    text.style.display = 'none';
});

changeTextButton.addEventListener('click', function () {
    inputField.value = "HELLO WORLD HEHE!";
});

document.addEventListener('click', function () {
    clickCount++;
    clickCountDisplay.textContent = `Сколько кликов: ${clickCount}`;
});


checkInputButton.addEventListener('click', function () {
    if (inputField.value.trim() === '') {
        errorMessage.textContent = "Ошибка: Поле ввода пустое! (нужно написать потому что)";
    } else {
        errorMessage.textContent = ""; 
    }
});

changeStyleButton.addEventListener('click', function () {
    if (!isStyled) {
        text.style.fontWeight = 'bold';
        text.style.fontSize = '24px';
    } else {
        text.style.fontWeight = 'normal';
        text.style.fontSize = '16px';
    }
    isStyled = !isStyled;
});
