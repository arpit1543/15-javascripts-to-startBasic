const colors = ["green", "red", "rgba(133,122,200)", 
"#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click',function(){
    // get random  umber betwenn 0-3  colors [0]
   const randomNumber = getRandomN();
   console.log(randomNumber);

   document.body.style.backgroundColor = colors[randomNumber];
   color.textContent = colors[randomNumber];
}) ;

function getRandomN() {
    return Math.floor(Math.random()*colors.length);
}