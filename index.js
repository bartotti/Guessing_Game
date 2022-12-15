let input_box = document.getElementById("input-box");
let guess_btn = document.getElementById("guess-btn");

let dispaly1 = document.getElementById('display=1');
let dispaly2 = document.getElementById('display=2');
let dispaly3 = document.getElementById('display=3');
let dispaly4 = document.getElementById('display=4');
let dispaly5 = document.getElementById('display=5');

guess_btn.addEventListener('click', function(){
    //console.log(guess_btn)
    let input_box = document.getElementById("input-box").value;
    //console.log(input_box)
    if(input_box <= -1 || input_box >= 101){
        alert("cant be negative number or the number is larger then 0-100");
    }
    let getNumber = Math.floor(Math.random() * 100 + 1);

    //guess logic and dispaly it to the html by innerHTML 
    // if(input_box != getNumber || dispaly2.innerHTML === 'string'){
    //     dispaly1.innerHTML = input_box;
    // }
    // else if(input_box != getNumber || dispaly2.innerHTML === 'string'){
    //     dispaly2.innerHTML = input_box;
    // }
    for(let i = 0; i < 5;i++)
    {
    if(input_box != getNumber){
        dispaly1.innerHTML = input_box;
    }
    else if(input_box != getNumber){
        dispaly2.innerHTML = input_box;
    }

    }

      
})