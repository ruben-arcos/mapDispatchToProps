export const addCar = (car) => {
    return {
        type: 'ADD_CAR',
        value: car
}
}

export const removeCar = (index) => {
    return {
        type: 'REMOVE_CAR',
        value: index
}
}

// you could also export here, your choice