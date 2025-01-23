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

