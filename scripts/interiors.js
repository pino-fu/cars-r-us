import { getInteriors, setInterior } from "./database.js";

const interiors = getInteriors()


export const Interiors = () => {
    let html = "<h2>Interiors</h2>"

    html += `<select id="interior">
             <option value="0">Select an interior style</option>`

    const optionsArray = interiors.map((interior) => {
        return `<option value="${interior.id}">${interior.style}</option>`
    })

    html += optionsArray.join("")
    html += "</select>"
    return html
}


document.addEventListener(
    "change",
    (changeEvent) => {

        const clicked = changeEvent.target

        if (clicked.id === "interior") {
            const interiorId = clicked.value

            for (const interior of interiors) {
                if (interior.id === parseInt(interiorId)) {
                    setInterior(parseInt(clicked.value))
                }
            }
        }
    }
)