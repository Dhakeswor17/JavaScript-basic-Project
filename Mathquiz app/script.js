let num1 = document.getElementById("first_number")
let num2 = document.getElementById("second_number")
let marks = document.getElementById("score")
let answer = document.getElementById("input")
let form = document.getElementById("form")
let display = document.getElementById("pop-up")
let h = document.getElementById("h3")
let btnE = document.getElementById("btn")

   let Random1 = Math.floor(Math.random()*10+1)
   let Random2 = Math.floor(Math.random()*10+1)
   let result = Random1*Random2
   let score =0
    
   num1.innerText= Random1
   num2.innerText = Random2
   
   form.addEventListener("submit", (event) =>{
    event.preventDefault()
    let userAnswer = +answer.value;
    
    
   if(result===userAnswer){
    updateLocatSTorage()
    marks.innerText = score++;
    display.style.visibility = 'visible';
    display.style.backgroundColor = 'green'
    display.innerText = 'Right'
    if(score>0){
        h.style.color = 'green';
    }
    
    
    
}else {
    marks.innerHTML = score--;
    display.style.visibility = 'visible'
    display.innerText = 'Wrong'
    display.style.backgroundColor = 'red'
    if(score<0){
        h.style.color = 'red';
    }
    
}
})
   function updateLocatSTorage(){
    localStorage.setItem("score", JSON.stringify(score))
   }
    
    

