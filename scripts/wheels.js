import { getWheels, setWheel } from "./database.js";

const wheels = getWheels()


export const Wheels = () => {
    let html = "<h2>Wheels</h2>"

    html += `<select id="wheel">
             <option value="0">Select a wheel style</option>`

    const optionsArray = wheels.map( (wheel) => {
        return `<option value="${wheel.id}">${wheel.style}</option>`
    })

    html += optionsArray.join("")
    html += "</select>"
    return html
}


document.addEventListener(
    "change",
    (changeEvent) => {

        const clicked = changeEvent.target

        if (clicked.id === "wheel") {
            const wheelId = clicked.value

            for (const wheel of wheels) {
                if (wheel.id === parseInt(wheelId)) {
                    setWheel(parseInt(clicked.value))
                }
            }
        }
    }
)