<<<<<<< HEAD
=======
console.log('Working')
const numberBox = document.querySelector(".numberBox")
console.log(numberBox)

>>>>>>> 468d1a735e74e82994a9ceffe7b16c29544b82f7
// Step 1: Create a random number generator between 1-100
// Step 2: Create an input box to enter a number. Use a button to submit that number.
// Step 3: If not winning number, give hint as to whether guess is too high or too low.
function winNum() {
    return (Math.floor(Math.random()*100)+1)
} 

//Step 2: define and connect user given guess
const numberBox = document.querySelector('.numberBox')

function game(){
    answer() = winningNumber ()
}

<<<<<<< HEAD
//Step 3: logic (user gets 5 guesses)
if (winNum() === guess1()){
    return 'Winner!';
} else
=======


function answer(){
return (Math.floor(Math.random() * 100) + 1)
}

let button= document.querySelector(".submit")

button.addEventListener('click', function(){
    let guess1 = numberBox.value
    console.log(guess1)
}
)





//entry into numberBox === answer <---winningNumber
>>>>>>> 468d1a735e74e82994a9ceffe7b16c29544b82f7
