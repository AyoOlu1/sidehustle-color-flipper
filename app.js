const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "blue", "grey", "pink", 
"rgb(122,34,23)", "rgb(14,23,87)" , "rgb(200,200,23)", "#ff0056", "#bb80e5",
 "cyan", "greenyellow", "coral"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  // console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
