let quote = document.querySelector("#text");
let button = document.querySelector("#get button")
let text = document.querySelector("#quote h3")
let cursor = document.querySelector("#cursor")

document.body.addEventListener("mousemove",function(details){
    cursor.style.left=details.x+"px"
    cursor.style.top=details.y+"px"
})

button.addEventListener("click", async function(){
   let raw = await fetch("https://api.adviceslip.com/advice");
   let data = await raw.json();
   text.style.transition="all 5s linear"
   quote.innerText=data.slip.advice
   console.log(data.slip.advice)
})