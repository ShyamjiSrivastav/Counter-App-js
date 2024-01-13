//Fetching the html element

let count=document.querySelector('.number');

//convert the string into integer using parseInt

let number=parseInt(count.innerText);

//Function to decrement the value

function decrement(){
    number=number-1;
    count.innerText=number;
}

//Function to increment the value

function increment(){
    number=number+1;
    count.innerText=number;
}

