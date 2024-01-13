let count=document.querySelector('.number');
let number=parseInt(count.innerText);
function decrement(){
    number=number-1;
    count.innerText=number;
}

function increment(){
    number=number+1;
    count.innerText=number;
}

