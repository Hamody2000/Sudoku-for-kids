let startBtn = document.querySelector('#start');
let time = document.querySelector('h1');
let seconds = document.querySelector('#sec');
let minutes = document.querySelector('#min');
let tryagainBtn = document.querySelector('#tryagainBtn');
let playAgainBtn = document.querySelector('#playAgainBtn'); 
let losingDiv = document.querySelector('#losingDiv');
let nameError = document.querySelector("#nameError")
let loginBTn = document.querySelector("#loginButton");
let numError = document.querySelector("#number");
let playerNames = localStorage.getItem("nameFromPage1")
let welcomMsg =document.querySelector("#welcomMsg");
let divsOfgame = document.querySelectorAll(".divOfGame")
let imag1 = document.getElementsByTagName('img')[0]
let imag2 = document.getElementsByTagName('img')[1]
let imag3 = document.getElementsByTagName('img')[2]
let imag4 = document.getElementsByTagName('img')[3]
let images= [imag1, imag2, imag3, imag4]
let arrayofDivs = [...divsOfgame]
let gridOfgame = document.createElement("div")
let col1=[arrayofDivs[0],arrayofDivs[4],arrayofDivs[8],arrayofDivs[12]]
let col2=[arrayofDivs[1],arrayofDivs[5],arrayofDivs[9],arrayofDivs[13]]
let col3=[arrayofDivs[2],arrayofDivs[6],arrayofDivs[10],arrayofDivs[14]]
let col4=[arrayofDivs[3],arrayofDivs[7],arrayofDivs[11],arrayofDivs[15]]
let row1=[arrayofDivs[0],arrayofDivs[1],arrayofDivs[2],arrayofDivs[3]]
let row2=[arrayofDivs[4],arrayofDivs[5],arrayofDivs[6],arrayofDivs[7]]
let row3=[arrayofDivs[8],arrayofDivs[9],arrayofDivs[10],arrayofDivs[11]]
let row4=[arrayofDivs[12],arrayofDivs[13],arrayofDivs[14],arrayofDivs[15]]
let grid1=[arrayofDivs[0],arrayofDivs[1],arrayofDivs[4],arrayofDivs[5]]
let grid2=[arrayofDivs[2],arrayofDivs[3],arrayofDivs[6],arrayofDivs[7]]
let grid3=[arrayofDivs[8],arrayofDivs[9],arrayofDivs[12],arrayofDivs[13]]
let grid4=[arrayofDivs[10],arrayofDivs[11],arrayofDivs[14],arrayofDivs[15]]


// to check if the array contain duplicates
const hasDuplicates =function(array) {
    let valuesSoFar = [];
    for (let i = 0; i < array.length; ++i) {
        let value = array[i].innerHTML;
        if (valuesSoFar.indexOf(value) !== -1) {
            return true;
        }
        valuesSoFar.push(value);
    }
    return false;
}

const getRandom = function(){
    let array=[];
    let random;
    let imgArray=[]
    let imgRandom;
    for(let i=0 ; i<4 ; i++){
        
        random = Math.floor(Math.random()*4)
        if ( !array.includes(random)){
            array.push(random)
        }
        else{
            i -= 1
        }
        
       
    }
    for (var i = 0; i <4 ; i++) {

        imgRandom=(Math.floor(Math.random()*4))
        if ( !imgArray.includes(imgRandom)){
            imgArray.push(imgRandom)
        }
        else {
            i -= 1
        }
        
    }
    //putting random image in a random cell of the grid
    grid1[array[0]].innerHTML= `<img src=${images[imgArray[0]].src}>`
    grid1[array[0]].classList.add('dontPut')

    grid2[array[1]].innerHTML= `<img src=${images[imgArray[1]].src}>`
    grid2[array[1]].classList.add('dontPut')

    grid3[array[2]].innerHTML= `<img src=${images[imgArray[2]].src}>`
    grid3[array[2]].classList.add('dontPut')
    
    grid4[array[3]].innerHTML= `<img src=${images[imgArray[3]].src}>`
    grid4[array[3]].classList.add('dontPut')
   
}

//to check if all the divs contain imgages
let containImg= function(value){return value.innerHTML.indexOf('img')!==-1 }


window.addEventListener('load', function () {



    //welcom message by player neme
    welcomMsg.innerText =`Welcome ${playerNames.charAt(0).toUpperCase()+playerNames.slice(1)}`

    // when clicking on start button the stop watch will start and will call startGame() function
    startBtn.onclick= function(){
    
      seconds.textContent=59
         timerID=setInterval(function(){
          seconds.textContent--
          if(seconds.textContent<1){
              losingDiv.classList.remove('disappear')   
              clearInterval(timerID)

            }
        },1000)//stopwatch
        startGame();
    
        startBtn.onclick= function(event){
          event.preventDefault()
        }
        
    }//end of start game button


    playAgainBtn.onclick= function(){
        location.reload()
    }//reload the page to restart the game

    tryagainBtn.onclick= function(){
        location.reload()
    }//reload the page to restart the game
    

 // start the game 
 const startGame = function (){
    //setting this attribute to make it possible to tab on the divsOfgame 
    divsOfgame.forEach((box) => {
        box.setAttribute('tabindex', '0')
    })
    
    test = arrayofDivs

    getRandom()
 
    
    // putting focus highlight style 
    arrayofDivs.forEach((box) => {
        box.addEventListener("focusin", function (){
            box.classList.add('selected')
            focusedIndex = arrayofDivs.indexOf(box)
        })
        box.addEventListener("focusout", function (){
            box.classList.remove('selected')

        })
        divsOfgame[0].focus()
        nextIndex=0;

        // moveing by arrow keys
        box.addEventListener("keydown", function(event){
            if (event.key =='ArrowUp' && nextIndex >=4  ) {
                event.preventDefault()
                nextIndex = focusedIndex-4
                arrayofDivs[nextIndex].focus()
            }
            else if (event.key =='ArrowDown'  && nextIndex <=11 ) {
                event.preventDefault()
                nextIndex = focusedIndex+4
                arrayofDivs[nextIndex].focus()
            }
            else if (event.key =='ArrowLeft' && nextIndex >0  ) {
                event.preventDefault()
                nextIndex = focusedIndex-1
                arrayofDivs[nextIndex].focus()
            }
            else if (event.key =='ArrowRight'  && nextIndex <15 ){
                event.preventDefault()
                nextIndex = focusedIndex+1
                arrayofDivs[nextIndex].focus()
            }
            ////// putting the images by the user
            if (event.key ==1 &&!box.classList.contains("dontPut")){
                box.innerHTML = `<img src=${imag1.src}>`
                
            }
            else if (event.key ==2 &&!box.classList.contains("dontPut")){
                box.innerHTML = `<img src=${imag2.src}>`
            }
            else if (event.key ==3 &&!box.classList.contains("dontPut")){
                box.innerHTML = `<img src=${imag3.src}>`
            }
            else if (event.key ==4 &&!box.classList.contains("dontPut")){
                box.innerHTML = `<img src=${imag4.src}>`
            }
            // testing for winning the game, every div should contain an image and every column and row and grid sholdn't contain
            //simillar images
            if( test.every(containImg) && !hasDuplicates(col1) && !hasDuplicates(col2) && !hasDuplicates(col3) && !hasDuplicates(col4)
            && !hasDuplicates(row1) && !hasDuplicates(row2) && !hasDuplicates(row3) && !hasDuplicates(row4)
            && !hasDuplicates(grid1) && !hasDuplicates(grid2) && !hasDuplicates(grid3) && !hasDuplicates(grid4)){

                winingDiv.classList.remove('disappear')
                
            }
            
        })
        
    })
  
 }

});


