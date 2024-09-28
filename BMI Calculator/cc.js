const form=document.querySelector('form');

form.addEventListener('submit', function (event) {
  event.preventDefault()
  const height=parseInt(document.querySelector('#Height').value);
  const weight=parseInt(document.querySelector('#Weight').value);
  const result=document.querySelector('#result');

  if (height===''||height<0||isNaN(height)) {
    result.innerHTML=`Give a valid number for height`;
  } else  if (weight===''||weight<0||isNaN(weight)) {
    result.innerHTML=`Give a valid number for weight `;
  }
  else {
    const bmi=(weight/((height*height)/10000)).toFixed(2);
    result.innerHTML=bmi;
    const para= document.querySelector('#para')
    if (bmi<=18.6) {
     para.innerHTML='Under Weight'
    }
    else  if ((bmi>=18.6 )&& (bmi<=24.9)) {
     para.innerHTML='Normal Weight'
    }
    else if(bmi>=24.9){
     para.innerHTML='Over Weight'
    }
   
  }


 
})

