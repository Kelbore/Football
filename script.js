"use strict";

let teams = [
    {code:"DAL", name:"Dallas Cowboys", plays:"Arlington, TX"},
    {code:"DEN", name:"Denver Broncos", plays:"Denver, CO"},
    {code:"HOU", name:"Houston Texans", plays:"Houston, TX"},
    {code:"KAN", name:"Kansas City Chiefs", 
    plays:"Kansas City, MO"},
   ];


function selectDropDown() {
    const footBallTeam = document.getElementById("footBallTeam");
    for(let i=0; i<teams.length; i++) {
        let optionEl = document.createElement("option");
        optionEl.textContent = teams[i].name;
        optionEl.value = teams[i].code;

        footBallTeam.appendChild(optionEl);
    }
}   

selectDropDown();

function BtnClicked() {
    const footBallTeam = document.getElementById("footBallTeam");
    const teamCode = footBallTeam.value;
    let selectedTeam;
    for(const team of teams) {
        if(team.code === teamCode){
            selectedTeam = team;
        }
    }
    const message = `You selected the ${selectedTeam.name} (${selectedTeam.code}) who played ${selectedTeam.plays}`;
    const messageEl = document.getElementById("message");
    messageEl.innerHTML = message;
}

const selectTeam = document.getElementById("selectTeam");
selectTeam.onclick = BtnClicked;





   
   