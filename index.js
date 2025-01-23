// Generating computer outputs
function generater_choice() {
    let random = Math.floor(Math.random() * 10);
    let a = random % 3;
    let comp_choice;
    // 1, 0, -1 represent rock, paper, scissor respectively.
    if (a == 0) {
        comp_choice = 1;
    }
    else if (a == 1) {
        comp_choice = 0;
    }
    else {
        comp_choice = -1;
    }
    return comp_choice;
}

// Handling user inputs
function user_input() {
    let s = prompt("Type your choice: ");
    let user_choice = s.toUpperCase();
    if (user_choice != "ROCK" && user_choice != "PAPER" && user_choice != "SCISSOR") {
        alert("Invalid input.");
        return user_input();
    }
    else {
        if (user_choice[0] == "R") return 1;
        else if (user_choice[0] == "S") return -1;
        else if (user_choice[0] == "P") return 0;
    }
}

// The main code
function winner() {
    let counter = 0;
    const MAX = 5;
    for (i = 0; i < MAX; i++) {
        let det = user_input();
        let sum = det + generater_choice();
        // determining tie
        if (2 * det == sum) {
            alert("Tie!");
            continue;
        }

        if (sum == 0) {
            if (det == 1) {
                counter++;
                alert("Rock beats scissor!");
            }
            else {
                counter--;
                alert("Rock beats scissor!");
            }
        }   
        else if (sum == 1) {
            if (det == 0) {
                counter++;
                alert("Paper beats rock!");
            }
            else {
                counter--;
                alert("Paper beats rock!");
            }
        }  
        else {
            if (det == -1) {
                counter++;
                alert("Scissor beats paper!");
            }
            else {
                counter--;
                alert("Scissor beats paper!");
            }
        }
    }
    if (counter > 0) {alert("You are the winner!");}
    else if (counter < 0)  {alert("You are the loser!");}
    else {alert("It is a tie");}
}

winner();