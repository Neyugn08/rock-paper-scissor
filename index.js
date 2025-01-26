// Generating computer outputs
function generater_choice() {
    let random = Math.floor(Math.random() * 10);
    let a = random * 13 % 3;
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

// The main code
function winner(user_choice) {
    round++;
    rounds.textContent = round;
    const MAX = 5;
    let det = user_choice;
    let sum = det + generater_choice();
    
    if (2 * det == sum) {
        warning.textContent = "";
        warning.textContent = "Tie!";
        warning.style.fontSize = "30";
        warning.style.fontWeight = "700";
    }
    else if (sum == 0) {
        if (det == 1) {
            counter++;
            warning.textContent = "";
            warning.textContent = "Rock beats scissor!";
            warning.style.fontSize = "30";
            warning.style.fontWeight = "700";
        }
        else {
            counter--;
            warning.textContent = "";
            warning.textContent = "Rock beats scissor!";
            warning.style.fontSize = "30";
            warning.style.fontWeight = "700";
        }
    }   
    else if (sum == 1) {
        if (det == 0) {
            counter++;
            warning.textContent = "";
            warning.textContent = "Paper beats rock!";
            warning.style.fontSize = "30";
            warning.style.fontWeight = "700";
        }
        else {
            counter--;
            warning.textContent = "";
            warning.textContent = "Paper beats rock!";
            warning.style.fontSize = "30";
            warning.style.fontWeight = "700";
        }
    }  
    else if (sum == -1) {
        if (det == -1) {
            counter++;
            warning.textContent = "";
            warning.textContent = "Scissor beats paper!";
            warning.style.fontSize = "30";
            warning.style.fontWeight = "700";
        }
        else {
            counter--;
            counter++;
            warning.textContent = "";
            warning.textContent = "Scissor beats paper!";
            warning.style.fontSize = "30";
            warning.style.fontWeight = "700";
        }
    }

    console.log(counter);
    
    if (round === MAX) {
        if (counter > 0) {console.log("You are the winner!");}
        else if (counter < 0)  {console.log("You are the loser!");}
        else {console.log("It is a tie");}
        round = 0;
        counter = 0;
    }
}

const container = document.querySelector(".container");
const body = document.querySelector("body");
let warning = document.querySelector(".warning");
let rounds = document.querySelector(".rounds");
let again = document.querySelector(".again");

let counter = 0;
let round = 0;

container.addEventListener("click", function(e) {
    let user_choice = e.target.className.toUpperCase();
    if (user_choice !== "ROCK" && user_choice !== "PAPER" && user_choice !== "SCISSOR") {
        /*const warning = document.createElement("div");
        warning.textContent = "You clicked the wrong button!";
        warning.style.color = "red";
        warning.style.fontSize = "30";
        warning.style.fontWeight = "700";
        container.insertBefore(warning, rockBtn);*/
    }
    else {
        let ans;
        if (user_choice[0] == "R") ans = 1;
        else if (user_choice[0] == "S") ans = -1;
        else if (user_choice[0] == "P") ans = 0;
        winner(ans);
    }
});

again.addEventListener("click", () => {
    round = 0; 
    counter = 0;
    warning.textContent = "";
    rounds.textContent = "";
});