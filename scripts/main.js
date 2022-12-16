import { htmlInjector } from "./cars-r-us.js";

const mainContainer = document.querySelector("#container")

const renderHTML = () => {
    mainContainer.innerHTML = htmlInjector()
}

renderHTML()

document.addEventListener("stateHasChanged", event => {
    console.log("Data state changed. Regenerating HTML.....")
    renderHTML()
})