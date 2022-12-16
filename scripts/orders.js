import { getInteriors, getPaints, getTechnologies, getWheels, getOrders } from "./database.js";

const interiors = getInteriors()
const paints = getPaints()
const wheels = getWheels()
const technologies = getTechnologies()

const buildOrderItem = (order) => {

    const foundInterior = interiors.find(

        (interior) => {
            return interior.id === order.interiorId
        }
    )
    let totalPrice = foundInterior.price

    const foundPaint = paints.find(

        (paint) => {
            return paint.id === order.paintId
        }
    )
    totalPrice += foundPaint.price

    const foundWheel = wheels.find(

        (wheel) => {
            return  wheel.id === order.wheelId
        }
    )
    totalPrice += foundWheel.price

    const foundTechnology = technologies.find(

        (technology) => {
           return technology.id === order.technologyId
        }
    )
    totalPrice += foundTechnology.price

    const totalPriceString = totalPrice.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    return `<li id="orderPrice">
            Order#${order.id} costs ${totalPriceString}
            </li>`
    
}



export const Orders = () => {

    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}