

let XDisplay = document.getElementById("X")
let YDisplay = document.getElementById("Y")


let trackMouse = (e)=>{
	XDisplay.innerHTML = `X: ${e.screenX}`
	YDisplay.innerHTML = `Y: ${e.screenY}`
}


document.addEventListener("mousemove", trackMouse)


