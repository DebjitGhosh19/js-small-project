
 let RadomColor=function RadomColor() {
const hex=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
  let color="#";
  for (let index = 0; index <6; index++) {
    let randomNumber=Math.floor(Math.random()*16);
    color += hex[randomNumber];
      
  }
  // console.log(color);
  
  return color; 
 }
let intervalId;
 const startChangingColor=function(){
  if(!intervalId){
  intervalId=setInterval(change,1000);}
  function change() {
    document.body.style.background=RadomColor()
  }
 }
 const stopChangingColor=function () {
  clearInterval(intervalId);
  intervalId=null;
 }
 document.querySelector('#start').addEventListener("click",startChangingColor);
 document.querySelector('#stop').addEventListener("click",stopChangingColor);