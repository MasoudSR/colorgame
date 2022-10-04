const container = document.querySelector(".container");
container.addEventListener("click", selectHandler);
document.getElementById("newgame").addEventListener("click",newGame)
document.querySelector(".difficulty").addEventListener("click", difficultyHandler)

let life = 3;
let difficulty = "easy"

const randomGenerator = () => {
	return Math.round(Math.random() * 255);
};

const randomRGB = () => {
	return `rgb(${randomGenerator()}, ${randomGenerator()}, ${randomGenerator()})`;
};

const boxGenerator = () => {
	const box = document.createElement("div");
	box.classList.add("colorBox");
	const color = randomRGB();
	box.style.backgroundColor = `${color}`;
	return { box, color };
};

const correct = Math.round(Math.random() * 5);



function selectHandler(event) {
	const selectedColor = event.path[0].style.backgroundColor;
	const answer = document.querySelector(".question").innerText;
	if (selectedColor === answer) {
		alert("you win");
        newGame()
	}
    else{
        life--
        document.getElementById("life").innerText=life
        if (life === 0) {
            alert("you lose")
            newGame()
        }
    }
}


function newGame(){
    if (difficulty === "easy") {
        life=3
    }else if(difficulty === "hard"){
        life=2
    }
    document.getElementById("life").innerText=life
    container.innerHTML=""
    for (let i = 0; i < 6; i++) {
        const box = boxGenerator();
        if (i === correct) {
            document.querySelector(".question").innerText = box.color;
        }
        container.append(box.box);
    }
}

function difficultyHandler(event){
    if (event.target.innerText === "Easy") {
        difficulty="easy"
        document.getElementById("easy").classList.add("active")
        document.getElementById("hard").classList.remove("active")
    }else if(event.target.innerText === "Hard"){
        difficulty="hard"
        document.getElementById("hard").classList.add("active")
        document.getElementById("easy").classList.remove("active")
    }
    newGame()
}

newGame()