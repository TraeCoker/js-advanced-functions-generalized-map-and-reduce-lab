function map(sourceArray, mapFunction){
    return sourceArray.map(element => mapFunction(element))
};

function reduce(sourceArray, reduceFunction, startingValue){
    if(startingValue){
    return sourceArray.reduce(reduceFunction, startingValue)
    } else if (reduceFunction(true, true) === true) {
    return sourceArray.reduce(reduceFunction, true)
    } else {
    return sourceArray.reduce(reduceFunction, 0)
    }
};
