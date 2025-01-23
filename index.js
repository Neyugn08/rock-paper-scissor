function generater_choice() {
    let random = Math.floor(Math.random() * 10);
    let a = random % 3;
    let comp_choice;
    if (a == 0) {
        comp_choice = "rock";
    }
    else if (a == 1) {
        comp_choice = "paper";
    }
    else {
        comp_choice = "scissor";
    }
    return comp_choice;
}
