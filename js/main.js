// Alert Notification//
var box=document.getElementById('box');
var down = false;

function toggleNotifi(){
    if(down){
        box.style.height='0px';
        box.style.opacity=0;
        down = false;
    }else{
        box.style.height ='350px';
        box.style.opacity = 1;
        down = true;
    }
}


//Radio Button Selection//
let abcd = document.querySelector('input[name="abcd"]:checked').value;
alert(abcd);