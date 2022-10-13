
const numberBox = document.querySelector(".numberBox")
const button= document.querySelector(".submit")

function winNum() {
    return (Math.floor(Math.random()*100)+1)
} 

button.addEventListener('click', function(){
    let guess1 = numberBox.value
    console.log(guess1)
})

function comparison(winNum(), guess1){
let result;
if (winNum() === guess1){
    result = 'Winner!';
} else if (winNum() > guess1){
    result = 'Hint: guess higher!'
} else {
    result = 'Hint: guess lower!'
}
return result;
}





