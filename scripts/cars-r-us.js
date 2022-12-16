import { Interiors } from "./interiors.js";
import { Technologies } from "./technologies.js";
import { Wheels } from "./wheels.js";
import { Paints } from "./paints.js";
import { Orders } from "./orders.js";
import { addOrder } from "./database.js";


export const htmlInjector = () => {
    return `
    <main>
    <h1>Cars 'R Us Custom Ridez</h1>
    <div class="selectParent">
    <section class="selectBlock">${Interiors()}</section>
    <section class="selectBlock">${Technologies()}</section>
    <section class="selectBlock">${Wheels()}</section>
    <section class="selectBlock">${Paints()}</section>
    </div>
    <section id="buttonParent"><button id="clickToOrder">Place Order</button></section>
    <div class="orderParent">
    <div class="ordersDisplay">${Orders()}</div>
    </div>
    </main>
    `
}


document.addEventListener(
    "click",
    (event) => {

        const clicked = event.target

        if (clicked.id === "clickToOrder") {

            addOrder()
        }
    }
)