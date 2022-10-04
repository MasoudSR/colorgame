const container = document.querySelector(".container");
container.addEventListener("click", selectHandler);
document.getElementById("newgame").addEventListener("click",newGame)

let life = 3;

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
	}
    else{
        life--
        document.getElementById("life").innerText=life
        if (life === 0) {
            alert("you lose")
        }
    }
}


function newGame(){
    container.innerHTML=""
    for (let i = 0; i < 6; i++) {
        const box = boxGenerator();
        if (i === correct) {
            document.querySelector(".question").innerText = box.color;
        }
        container.append(box.box);
    }
}