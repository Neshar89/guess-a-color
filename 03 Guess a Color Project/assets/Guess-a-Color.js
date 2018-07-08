var squaresNum = 9;
var colors = generate(squaresNum);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("display");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var mode = document.querySelectorAll(".mode");

init();

function init(){
	for( var i = 0; i<mode.length; i++) {
	mode[i].addEventListener("click", function(){
		mode[0].classList.remove("selected");
		mode[1].classList.remove("selected");
		mode[2].classList.remove("selected");
		this.classList.add("selected");

		// this.textContent === "Easy" ? squaresNum =3: squaresNum=6
		if(this.textContent === "Easy") {
			squaresNum = 3;
		} else if(this.textContent ==="Hard") {
			squaresNum = 6;
		}
		 else {
			squaresNum = 9;
		}

		resetMe();
	});
}
}



function resetMe (){
	colors = generate(squaresNum);
	// pick a new random color from array
	pickedColor = pickColor();
	// change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	reset.textContent = "New Colors"

	message.textContent = "";
	// change colors of squares
	for (var i = 0; i< squares.length; i++) {
		if(colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	//  add initial colors to squares
	
	}
	h1.style.background = "steelblue";
}


// easy.addEventListener("click", function(){
// 	hard.classList.remove("selected");
// 	easy.classList.add("selected");
// 	squaresNum = 3;
// 	colors = generate(squaresNum);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i< squares.length; i++) {
// 		if(colors[i]) {
// 			squares[i].style.background = colors[i];
// 		} else {
// 			squares[i].style.display = "none"
// 		}
// 	}
// });

// hard.addEventListener("click", function(){
// 	easy.classList.remove("selected");
// 	hard.classList.add("selected");
// 	squaresNum = 6;
// 	colors = generate(squaresNum);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i< squares.length; i++) {
// 			squares[i].style.background = colors[i];
// 			squares[i].style.display = "block";
		
// 	}

// });


reset.addEventListener("click", function (){
	resetMe();
	// //generate all new colors
	// colors = generate(squaresNum);
	// // pick a new random color from array
	// pickedColor = pickColor();
	// // change colorDisplay to match picked Color
	// colorDisplay.textContent = pickedColor;
	// this.textContent = "New Colors"

	// message.textContent = "";
	// // change colors of squares
	// for (var i = 0; i< squares.length; i++) {
	// //  add initial colors to squares
	// squares[i].style.background = colors[i];
	// }
	// h1.style.background = "steelblue";
});

colorDisplay.textContent = pickedColor;



for (var i = 0; i< squares.length; i++) {
	//  add initial colors to squares
	squares[i].style.background = colors[i];

	// add click listeners to squares
	squares[i].addEventListener("click", function(){
		// gram color of clicked square
		var clicked = this.style.background;
		// compare color to pickedColor
		if (clicked === pickedColor) {
			message.textContent = " Correct!";
			reset.textContent = "Play Again?"
			changeColors(clicked);
			h1.style.background = clicked 
		} else {
			this.style.background = "#232323";
			message.textContent = "Try Again!";
		}
	});
}

function changeColors(color) {
	// loop through all squares
	for (var i = 0; i< squares.length; i++) {
	// change each color to match given color
		squares[i].style.background = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generate(num) {
	//make an array
	var arr = [];
	//repeat num times
	for (var i =0; i<num; i++) {
		// get random color and push into arr
		arr.push(randomColor());
		
	}
	//return that array
	return arr;
}

function randomColor() {
	// pick a red from 0 to 255 and so on
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb("+ r +", "+ g +", "+ b +")";
}