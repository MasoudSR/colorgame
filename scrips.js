const randomGenerator = ()=>{
    return Math.round(Math.random()*255)
}

const randomRGB = ()=>{
    return `rgb(${randomGenerator()},${randomGenerator()},${randomGenerator()})`
}

const boxGenerator = ()=>{
    
}

console.log(randomRGB())