//1.) for counting scores

let count=0;
let count2=0;
let homeScoreTxt= document.getElementById("home-score-txt");
let home_team_name= document.getElementById("home-team");
let guest_el=document.getElementById("guest-score-txt");
let guest_team_name=document.getElementById("guest-team");
function addPoint(team,point){

    if (team =='home') {
        count=count+point;
        homeScoreTxt.textContent=count;
    }
    else{
        count2=count2+point;
        guest_el.textContent=count2;
    }
    highlighting();
}


    // // ------------- sabse first time aise banaya tha------------
    // function oneHome(){
    //     count++;
    //     document.getElementById("home-score-txt").innerText=count;
    // }
    // function twoHome(){
    //     count=count+2;
    //     document.getElementById("home-score-txt").innerText=count;
    // }
    // function threeHome(){
    //     count=count+3;
    //     document.getElementById("home-score-txt").innerText=count;
    // } 


    // function oneGuest(){
    //     count2++;
    //     document.getElementById("guest-score-txt").innerText=count2;
    // }
    // function twoGuest(){
    //     count2=count2+2;
    //     document.getElementById("guest-score-txt").innerText=count2;
    // }

    // function threeGuest(){
    //     count2=count2+3;
    //     document.getElementById("guest-score-txt").innerText=count2;
    // }



    // 2.) for new game button
    
function newGame(){
    count=0;
    count2=0;
    homeScoreTxt.textContent=count;
    guest_el.textContent=count2;
    home_team_name.classList.remove("highlighter")
    guest_team_name.classList.remove("highlighter")
}


    // 3.) for highlighting the leading team
function highlighting(){
        if (count>count2) {
            home_team_name.classList.add("highlighter");
            guest_team_name.classList.remove("highlighter");
        }
        else if(count<count2){
            home_team_name.classList.remove("highlighter");
            guest_team_name.classList.add("highlighter");
        }
        else if(count==count2){
            home_team_name.classList.remove("highlighter");
            guest_team_name.classList.remove("highlighter");
        }

    }
