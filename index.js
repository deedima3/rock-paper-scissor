function battle(playerChoice, computerChoice){
    console.log("You Choose " + playerChoice +" !")
    console.log("Computer Choose " + computerChoice +" !")
    if(playerChoice == computerChoice){
        console.log("Draww!")
        return null
    }
    else if((computerChoice == "rock" && playerChoice == "scissor") || 
            (computerChoice == "paper" && playerChoice == "rock") || 
            (computerChoice == "scissor" && playerChoice == "paper")){
                return 0
            }
    else{
        return 1
    }
}

function game(){
    var scorePlayer = 0
    var scoreComputer = 0
    for(let i = 0;i<5;i++){
        console.log("Insert Your Choice!")
        let playerChoice = window.prompt().toLowerCase()
        let choice = ["rock", "paper", "scissor"]
        let computerChoice = choice[Math.floor(Math.random()*choice.length)]
        let standings = battle(playerChoice, computerChoice)
        if(standings == 1){
            scorePlayer++
        }
        else if(standings == 0){
            scoreComputer++
        }
        console.log("The Score is " + scorePlayer + " - " + scoreComputer)
        console.log("------------------------------------")
    }
}

game()