const container = document.querySelector(".container")

const randomGenerator = ()=>{
    return Math.round(Math.random()*255)
}

const randomRGB = ()=>{
    return `rgb(${randomGenerator()},${randomGenerator()},${randomGenerator()})`
}

const boxGenerator = ()=>{
    const box = document.createElement("div")
    box.classList.add("colorBox")
    box.style.backgroundColor=`${randomRGB()}`
    return box
}

console.log(boxGenerator())

for (let i = 0; i < 6; i++) {
    container.append(boxGenerator())
}