const database = {
    orderBuilder: {},
    paints: [
        {id: 1, color: "Silver", price: 429},
        {id: 2, color: "Midnight Blue", price: 499},
        {id: 3, color: "Firebrick Red", price: 529},
        {id: 4, color: "Spring Green", price: 559}
    ],
    interiors: [
        {id: 1, style: "Beige Fabric", price: 379},
        {id: 2, style: "Charcoal Fabric", price: 399},
        {id: 3, style: "White Leather", price: 799},
        {id: 4, style: "Black Leather", price: 849}
    ],
    technologies: [
        {id: 1, tech: "Basic Package", price: 99}, 
        {id: 2, tech: "Navigation Package", price: 299},
        {id: 3, tech: "Visibility Package", price: 499},
        {id: 4, tech: "Ultra Package", price: 699}
    ],
    wheels: [
        {id: 1, style: "17-inch Pair Radial", price: 500},
        {id: 2, style: "17-inch Pair Radial Black", price: 700},
        {id: 3, style: "18-inch Pair Spoke Silver", price: 1000},
        {id: 4, style: "18-inch Pair Spoke Black", price: 1100}, 
    ],
    orders: [
        {id: 1, paintId: 4, interiorId: 2, technologyId: 3, wheelId: 1, timestamp: 1614659931693}
    ]
}


export const getPaints = () => {
    return database.paints.map(paint => ({...paint}))
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}

export const getTechnologies = () => {
    return database.technologies.map(technology => ({...technology}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}

export const getOrders = () => {
    return database.orders.map(order => ({...order}))
}


export const setPaint = (id) => {
    return database.orderBuilder.paintId = id
}

export const setInterior = (id) => {
    return database.orderBuilder.interiorId = id
}

export const setTechnology = (id) => {
    return database.orderBuilder.technologyId = id
}

export const setWheel = (id) => {
    return database.orderBuilder.wheelId = id
}



export const addOrder = () => {

    const newOrder = {...database.orderBuilder}

    const lastIndex = database.orders.length - 1
    newOrder.id = database.orders[lastIndex].id + 1

    newOrder.timestamp = Date.now()

    database.orders.push(newOrder)

    database.orderBuilder = {}

    document.dispatchEvent(new CustomEvent("stateHasChanged"))
}
