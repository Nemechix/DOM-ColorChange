const inputColor = document.getElementById("exampleColorInput")
const buttonColorChange = document.getElementById("buttonColor")
const pToChange = document.getElementById("pToChange")
const colorToShow = document.getElementById("colorToShow")

buttonColorChange.addEventListener("click", () => {

    pToChange.textContent = inputColor.value
    colorToShow.style.backgroundColor = inputColor.value
    navigator.clipboard.writeText(inputColor.value);

})
