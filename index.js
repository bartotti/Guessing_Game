let input_box = document.getElementById("input-box");
let guess_btn = document.getElementById("guess-btn");
let need_hint = document.getElementById("need-a-hint");
let message_hint = document.getElementById('message-output');

let message_range = document.getElementById('message-range');

let dispaly1 = document.getElementById('display=1');
let dispaly2 = document.getElementById('display=2');
let dispaly3 = document.getElementById('display=3');
let dispaly4 = document.getElementById('display=4');
let dispaly5 = document.getElementById('display=5');

let getNumber = Math.floor(Math.random() * 100 + 1);
let winning_number = getNumber;
console.log("my name is winning number" + winning_number)
let game_alive = true;
let player_guess = input_box;
let player_pass_guess = [];
let reset = document.getElementById('reset-game');
 
//1 .HINT BUTTON <p> tag
//if(guess number + 5 => win number)  (too low)
//guess number - 5 <= win number  (too high)
//color change
//if(numberguess > player_pass_guess[i])
// display1.style.color = green
//check game if the player guess the right number @value player input
// } else if (this.difference() < 10) {
//     this.heatMap.push("hot");
// } else if (this.difference() < 25) {
//     this.heatMap.push("warm");
// } else if (this.difference() < 50)

//2. STYLING of buttons , placement, and color changes

//geting possible win number
function possible_win_number(win_num){
    let temp_num = [];
    let temp = Math.floor(Math.random() * 15 + 1);
    let temp2 = Math.floor(Math.random() * 15 + 1);
    let win_num1 = win_num - temp;
    let win_num2 = win_num - temp2;
    temp_num.push(win_num1)
    temp_num.push(win_num2)
    console.log(temp_num)
    message_range.innerHTML = temp_num[0] +" " + " "+temp_num[1] + " " + win_num;
}

function update_color(){
    if(player_pass_guess[0] <= Number(winning_number))  //12 < 77
    {
        dispaly1.style.color = "red"; 
    }
    if(player_pass_guess[1] <= Number(winning_number)) 
    {
        dispaly2.style.color = "red"; 
    }
    if(player_pass_guess[2] <= Number(Number(winning_number))) 
    {
        dispaly3.style.color = "red"; 
    }
    if(player_pass_guess[3] <= Number(winning_number)) 
    {
        dispaly4.style.color = "red"; 
    }
    if(player_pass_guess[4] <= Number(winning_number)) 
    {
        dispaly5.style.color = "red"; 
    }

}
function hint(a){
    a.addEventListener('click', function(){
        possible_win_number(winning_number);
        //console.log(winning_number)

    },{once : true});
}

//function call for the hint button to work 
hint(need_hint);


function checkGame(){
    //console.log("I am from Check Game function ")
    alert("you have won!!!");
    reset_game_after_won();
}
//reset game after won
function reset_game_after_won(){
    player_pass_guess.length = 0;
    dispaly1.innerText = player_pass_guess;
    dispaly2.innerText = player_pass_guess;
    dispaly3.innerText = player_pass_guess;
    dispaly4.innerText = player_pass_guess;
    dispaly5.innerText = player_pass_guess;
    input_box.value = "";
}


//guess button
guess_btn.addEventListener('click', function(){
    if(input_box.value < 0 || input_box.value >= 101 ) {
        console.log("my name is from the if statemen inside the guess butn ")
        alert("cant be negative number or the number is larger then 0-100");
        // if(input_box.value === ""){
        // player_pass_guess[0].pop();
        // }************************************************************************
    }
    player_pass_guess.push(input_box.value);
    console.log(player_pass_guess);
    //console.log(typeof )
    if(player_pass_guess[0]){
        dispaly1.innerText = player_pass_guess[0]
        if(player_pass_guess[0] == winning_number){
            checkGame(Number(input_box.value));
        }
        if(player_pass_guess[0] > winning_number){
            message_hint.innerHTML = "Guess lower"
        }
        else {
            message_hint.innerHTML = "Guess higher"
        }
        
    }
    if(player_pass_guess[1]){
        dispaly2.innerText = player_pass_guess[1]
        if(player_pass_guess[1] == winning_number){
            checkGame(Number(input_box.value));
        }
        if(player_pass_guess[1] > winning_number){
            message_hint.innerHTML = "Guess lower"
        }
        else {
            message_hint.innerHTML = "Guess higher"
        }
    }
    if(player_pass_guess[2]){
        dispaly3.innerText = player_pass_guess[2]
        if(player_pass_guess[2] == winning_number){
            checkGame(Number(input_box.value));
        }
        if(player_pass_guess[2] > winning_number){
            message_hint.innerHTML = "Guess lower"
        }
        else {
            message_hint.innerHTML = "Guess higher"
        }
    }
    if(player_pass_guess[3]){
        dispaly4.innerText = player_pass_guess[3]
        if(player_pass_guess[3] == winning_number){
            checkGame(Number(input_box.value));
        }
        if(player_pass_guess[3] > winning_number){
            message_hint.innerHTML = "Guess lower"
        }
        else {
            message_hint.innerHTML = "Guess higher"
        }
    }
    if(player_pass_guess[4]){
        dispaly5.innerText = player_pass_guess[4]
        if(player_pass_guess[4] == winning_number){
            checkGame(Number(input_box.value));
        }
        if(player_pass_guess[4] > winning_number){
            message_hint.innerHTML = "Guess lower"
        }
        else {
            message_hint.innerHTML = "Guess higher"
        }
    }
    //check if the game is done or not
    if(player_pass_guess.length >=5 && player_pass_guess !== winning_number){
        game_alive = false;
        alert("you lose");
        reset_game_after_won()
    }
    update_color();
    // dispaly1.innerHTML = input_box
    // console.log(typeof dispaly4.innerHTML)
    //guess logic and dispaly it to the html by innerHTML 
    
})
// guess_btn.addEventListener('click', function(){
//     console.log(player_pass_guess)
//     player_pass_guess.push(input_box.value);
// })



//Reset button 
reset.addEventListener('click', reset_game_after_won);
