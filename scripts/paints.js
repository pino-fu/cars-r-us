import { getPaints, setPaint } from "./database.js";

const paints = getPaints()


export const Paints = () => {
    let html = `<h2>Paints</h2>`

    html += `<select id="paint">
    <option value= "0">Select a paint color</option>`

    const optionsArray = paints.map((paint) => {
        return `<option value ="${paint.id}">${paint.color}</option>`
    })

    html += optionsArray.join("")
    html += "</select>"
    return html
}


document.addEventListener(
    "change",
    (changeEvent) => {

        const clicked = changeEvent.target

        if (clicked.id === "paint") {
            const paintId = clicked.value

            for (const paint of paints) {
                if (paint.id === parseInt(paintId)) {
                    setPaint(parseInt(clicked.value))
                }
            }
        }
    }
)