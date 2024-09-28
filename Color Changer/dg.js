const buttons=document.querySelectorAll('.button');


const body=document.querySelector('body');

buttons.forEach(element => {
  element.addEventListener("click", function (event) {
   if (event.target.id==="gray") {
    body.style.background=event.target.id
   }
    else if(event.target.id==="blue") {
    body.style.background=event.target.id
   }
   else if(event.target.id==="white") {
    body.style.background=event.target.id
   } else if(event.target.id==="yellow") {
    body.style.background=event.target.id
   }
  })
  
});