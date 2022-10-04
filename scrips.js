const container = document.querySelector(".container");
container.addEventListener("click", selectHandler);

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

for (let i = 0; i < 6; i++) {
	const box = boxGenerator();
	if (i === correct) {
		document.querySelector(".question").innerText = box.color;
	}
	container.append(box.box);
}

function selectHandler(event) {
	const selectedColor = event.path[0].style.backgroundColor;
	const answer = document.querySelector(".question").innerText;
	if (selectedColor === answer) {
		alert("you win");
	}
}
