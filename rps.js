
let humanScore = 0;
let compScore = 0;


function getComputerchoice() {
    const comp_choice = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * 3);
    return comp_choice[random];
}

function getHumanchoice(){
    let hum_choice =prompt("Enter your choice [rock, paper, scissors]: ");
    return hum_choice;
}

function playround(hum_choice, comp_choice) {
    
    console.log("Human choice: ", hum_choice);
    console.log("computer choice: ", comp_choice);
    
    if (hum_choice === comp_choice) {
        console.log("It's a tie!");
    }
    else if (hum_choice == 'rock'  && comp_choice == 'paper') {
            console.log("Computer wins!");
            compScore++;
        }
    else if (hum_choice == 'paper'  && comp_choice == 'rock'){
        console.log("Human wins!");
        humanScore++;
    }
    else if (hum_choice == 'rock'  && comp_choice == 'scissors'){
        console.log("Human wins!!");
        humanScore++;
    }
    else if (hum_choice == 'scissors'  && comp_choice == 'rock'){
        console.log("Computer wins!");
        compScore++;
    }
    else {
        console.log("Invalid choice!");
    }

}

function playgame(rounds){
    for (let round = 0; round < rounds; round++){
        const humanSelection = getHumanchoice();
        const compSelection = getComputerchoice();


        playround(humanSelection, compSelection);
    }
}
playgame(10);