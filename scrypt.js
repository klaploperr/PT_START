var count = 0;

document.getElementById("myButton").onclick = function func() {
	count++;
	if (count % 2 == 0) { //проверка на четность
		document.getElementById("demo").innerHTML = ""
	} else {
        var img = document.createElement("img");
        img.src = "imgaes/bug.png"
        document.getElementById("demo").appendChild(img)
	}
}