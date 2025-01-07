
async function chooseOX(vs, player1, player2) {
    return new Promise((resolve) => {
        let choose_O_X = document.getElementsByClassName("choose_O_X")[0];
        choose_O_X.style.display = "flex";
        let btn_O = document.getElementById("O");
        let btn_X = document.getElementById("X");

        if (vs === "comp") {
            btn_O.addEventListener("click", function onClickO() {
                // btn_O.removeEventListener("click", onClickO); // Clean up event listener
                // btn_X.removeEventListener("click", onClickX);
                resolve({
                    player: "O",
                    comp: "X"
                });
            });

            btn_X.addEventListener("click", function onClickX() {
                // btn_X.removeEventListener("click", onClickX); // Clean up event listener
                // btn_O.removeEventListener("click", onClickO);
                resolve({
                    player: "X",
                    comp: "O"
                });
            });
        } else {
            let Choose_para = document.getElementById("choose_para");
            const num = Math.floor(Math.random() * 2);
            if (num === 0) {
                Choose_para.innerText = player1 + " Will Choose O / X";
            } else {
                Choose_para.innerText = player2 + " Will Choose O / X";
            }

            btn_O.addEventListener("click", function onClickO() {
                // btn_O.removeEventListener("click", onClickO);
                // btn_X.removeEventListener("click", onClickX);
                resolve({
                    player1: "O",
                    player2: "X"
                });
            });

            btn_X.addEventListener("click", function onClickX() {
                // btn_X.removeEventListener("click", onClickX);
                // btn_O.removeEventListener("click", onClickO);
                resolve({
                    player1: "X",
                    player2: "O"
                });
            });
        }
    });
}

let ox = "" ;
let arr = [ [ -1 , -1 , -1 ] , [ -1 , -1 , -1 ] , [ -1 , -1 , -1 ] ] ;
let ans = null ;
let Player1 = "";
let Player2 = "";

function checkWinner( player1 , player2 ){

    for ( let i = 0 ; i < 3 ; i++ ){
        if( arr[i][0] != -1 && ( arr[i][0] == arr[i][1]) && ( arr[i][0] == arr[i][2] ) ){
            ans = arr[i][0] ;
        }
        if( arr[i][0] != -1 && ( arr[0][i] == arr[1][i] ) && ( arr[2][i] == arr[0][i] )){
            ans = arr[0][i] ;
        }
    }

    if( arr[0][0] != -1 && ( arr[0][0] == arr[1][1] ) && ( arr[0][0] == arr[2][2] )){
        ans = arr[0][0] ;
    }
    if( arr[0][2] != -1 && ( arr[0][2] == arr[1][1] ) && ( arr[0][2] == arr[2][0] )){
        ans = arr[0][2] ;
    }

    console.log(ans);
    if( ans != null ){
        console.log("hii");
        if( ox == "O" ){
            alert( player2 + " won the Game");
        }
        else{
            alert( player1 + " won the Game");
        }
    }
}

function update_array( num1 , num2 ){
    if( ox == "O" ){
        arr[num1][num2] = 0;
    }
    else{
        arr[num1][num2] = 1 ;
    }
    console.log(arr);
}
function change_O_X(){
    if( ox == "O" ){
        ox = "X";
    }
    else{
        ox = "O" ;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let comp_btn = document.getElementById("comp");
    let friend_btn = document.getElementById("friend");

    // Add async to the event listener callback
    comp_btn.addEventListener("click", async function () {
        console.log("Computer option selected");

        // Access the first element with the class "human_comp"
        let human_comp = document.getElementsByClassName("human_comp")[0];
        human_comp.style.display = "none";

        let player1 = "";
        let player2 = "";

        let obj = await chooseOX("comp", player1, player2);
        console.log(obj);
    });

    // Add async to the event listener callback
    friend_btn.addEventListener("click", async function () {
        console.log("Friend option selected");

        let human_comp = document.getElementsByClassName("human_comp")[0];
        human_comp.style.display = "none";

        let user_input = document.getElementsByClassName("user_input")[0];
        user_input.style.display = "flex";

        let player1 = "";
        let player2 = "";

        let submit_btn1 = document.getElementById("submit_btn1");
        let submit_btn2 = document.getElementById("submit_btn2");

        submit_btn1.addEventListener("click", function () {
            let input_name1 = document.getElementById("input_name1");
            player1 = input_name1.value;
            console.log(player1);
            input_name1.value = "";
        });

        submit_btn2.addEventListener("click", function () {
            let input_name2 = document.getElementById("input_name2");
            player2 = input_name2.value;
            console.log(player2);
            input_name2.value = "";
        });

        let submit_data = document.getElementById("Submit_data");
        submit_data.addEventListener("click", async function (event) {
            if (player1 === "" || player2 === "") {
                alert("Please Enter the Names of Players ");
                event.preventDefault();
            } else {
                user_input.style.display = "none";

                let obj = await chooseOX("friend", player1, player2);
                Player1 = player1 ;
                Player2 = player2 ;
                console.log(obj);
                let choose_O_X = document.getElementsByClassName("choose_O_X")[0];
                choose_O_X.style.display = "none";

                let infoPara = document.getElementById("withFriend");
                infoPara.innerText = player1 + " :- " + obj.player1 + " , " + player2 + " :- " + obj.player2 ;
                let game = document.getElementById("Game");
                game.style.display = "grid" ;
                infoPara.style.display = "flex";
                
                ox = obj.player1 ;
            }
        });
    });
});


let btn1 = document.getElementById("game_btn_1");
let btn2 = document.getElementById("game_btn_2");
let btn3 = document.getElementById("game_btn_3");
let btn4 = document.getElementById("game_btn_4");
let btn5 = document.getElementById("game_btn_5");
let btn6 = document.getElementById("game_btn_6");
let btn7 = document.getElementById("game_btn_7");
let btn8 = document.getElementById("game_btn_8");
let btn9 = document.getElementById("game_btn_9");

btn1.addEventListener("click" , function(){

    if( btn1.innerText == "" ){
        btn1.innerText = ox;
        change_O_X();
        update_array(0,0);
        checkWinner( Player1 , Player2 );
    }
    else{
        alert("click on another button");
    }
})
btn2.addEventListener("click" , function(){
    if( btn2.innerText == "" ){
        btn2.innerText = ox;
        change_O_X();
        update_array(0,1);
        checkWinner( Player1 , Player2 );
    }
    else{
        alert("click on another button");
    }
})
btn3.addEventListener("click" , function(){
    
    if( btn3.innerText == "" ){
        btn3.innerText = ox;
        change_O_X();
        update_array(0,2);
        checkWinner( Player1 , Player2 );
    }
    else{
        alert("click on another button");
    }
})
btn4.addEventListener("click" , function(){
    
    if( btn4.innerText == "" ){
        btn4.innerText = ox;
        change_O_X();
        update_array(1,0);
        checkWinner( Player1 , Player2 );
    }
    else{
        alert("click on another button");
    }
})
btn5.addEventListener("click" , function(){
   
    if( btn5.innerText == "" ){
        btn5.innerText = ox;
        change_O_X();
        update_array(1,1);
        checkWinner( Player1 , Player2 );
    }
    else{
        alert("click on another button");
    }
})
btn6.addEventListener("click" , function(){
    
    if( btn6.innerText == "" ){
        btn6.innerText = ox;
        change_O_X();
        update_array(1,2);
        checkWinner( Player1 , Player2 );
    }
    else{
        alert("click on another button");
    }
})
btn7.addEventListener("click" , function(){
    
    if( btn7.innerText == "" ){
        btn7.innerText = ox;
        change_O_X();
        update_array(2,0);
        checkWinner( Player1 , Player2 );
    }
    else{
        alert("click on another button");
    }
})
btn8.addEventListener("click" , function(){
    
    if ( btn8.innerText == "" ){
        btn8.innerText = ox;
        change_O_X();
        update_array(2,1);
        checkWinner( Player1 , Player2 );
    }
    else{
        alert("click on another button");
    }

})
btn9.addEventListener("click" , function(){
    
    if( btn9.innerText == "" ){
        btn9.innerText = ox;
        change_O_X();
        update_array(2,2);
        checkWinner( Player1 , Player2 );
    }
    else{
        alert("click on another button");
    }
})

