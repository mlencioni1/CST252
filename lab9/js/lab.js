document.getElementById("outputEl");

var oneEl = document.createElement("button")
var twoEl = document.createElement("button")

oneEl.innerText = "Press Me";
twoEl.innerText = "Press Me";

oneEl.style.color = "skyblue";
twoEl.style.color = "rebeccapurple";

document.getElementById("outputEl").appendChild(oneEl);
document.getElementById("outputEl").appendChild(twoEl);
document.getElementById("h2").style.color = "orange";
