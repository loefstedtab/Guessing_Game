

const button = document.querySelector('#submit')
const numberBox = document.querySelector('#numberBox')

let winNum = (Math.floor(Math.random()*100)+1)


button.addEventListener('click', function(){
    let guess1 = numberBox.value
})

const message = document.querySelector('#message')

function comparison(){
if (winNum() === guess1){
    message.textContent = 'Winner!';
} else if (winNum() > guess1){
    message.textContent = 'Hint: guess higher!'
} else {
    message.textContent = 'Hint: guess lower!'
}
}





