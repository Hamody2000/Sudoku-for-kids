let startBtn = document.querySelector('#start');
let time = document.querySelector('h1');
let seconds = document.querySelector('#sec');
let minutes = document.querySelector('#min');
let tryagainBtn = document.querySelector('#tryagainBtn');
let losingDiv = document.querySelector('#losingDiv');
let nameError = document.querySelector("#nameError")
let playerName = document.querySelector("#playerName");
let loginBTn = document.querySelector("#loginButton");
let numError = document.querySelector("#number");


//check if the user entered a number , spaces or empty string
loginBTn.onclick= function(event){
        event.preventDefault()
    if (playerName.value=="" || playerName.value.includes(" ")){
            numError.classList.add('disappear')
            nameError.classList.remove('disappear');
            event.preventDefault()
        return;  
    }
    else if (!isNaN(playerName.value)){
            nameError.classList.add('disappear')
            numError.classList.remove('disappear');
             
        return;
    }
        
    //setting the name of the player in the local storage
    localStorage.setItem("nameFromPage1", playerName.value)
    
    window.location.href ="pages/gallerypage.html"
}

