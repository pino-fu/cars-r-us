import { getTechnologies, setTechnology } from "./database.js";

const technologies = getTechnologies()


export const Technologies = () => {
    let html = "<h2>Technologies</h2>"

    html += `<select id="tech">
             <option value="0">Select a technology package`

    const optionsArray = technologies.map((technology) => {
        return `<option value="${technology.id}">${technology.tech}</option>`
    })

    html += optionsArray.join("")
    html += "</select>"
    return html
}


document.addEventListener(
    "change",
    (changeEvent) => {

        const clicked = changeEvent.target

        if (clicked.id === "tech") {
            const techId = clicked.value
            
            for (const technology of technologies) {
                if (technology.id === parseInt(techId)) {
                    setTechnology(parseInt(clicked.value))
                }
            }
        }
    }
)