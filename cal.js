let screen=document.getElementById('screen');
buttons=document.querySelectorAll('button');
let screenValue="";
for(item of buttons){
    item.addEventListener("click",(e)=>{
    
        buttonText=e.target.innerText;
        console.log(buttonText);
        if(buttonText =="="){
            screen.value=eval(screenValue);
        }
        else if(buttonText=="Cl"){
        screenValue="";
        screen.value = screenValue;
        }
        else{
            screenValue += buttonText;
            screen.value =  screenValue;
        }
    })
  
}