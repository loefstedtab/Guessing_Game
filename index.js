console.log('Working')
const numberBox = document.querySelector(".numberBox")
console.log(numberBox)

// Step 1: Create a random number generator between 1-100
// Step 2: Create an input box to enter a number. Use a button to submit that number.
// Step 3: If not winning number, give hint as to whether guess is too high or too low.

function game(){
    answer() = winningNumber ()
}



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