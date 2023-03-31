//display user info
class CookieHome {

    constructor() {
        
        const playerNameEl = document.querySelector('.player-name');
        playerNameEl.textContent = this.getPlayerName();
    }

    getPlayerName() {
        return localStorage.getItem('userName') ?? 'Mystery player';
}

   
}

const cookieHome = new CookieHome();


//track likes for each cookie
let cinCount = 0;
const cinButton = document.getElementById("cinlikeButton");
let cinCountDisplay = document.getElementById("cinCount");
cinButton.addEventListener("click", function () {
    cinCount++;
    cinCountDisplay.innerHTML = cinCount;
});

let chocCount = 0;
const chocButton = document.getElementById("choclikeButton");
let chocCountDisplay = document.getElementById("chocCount");
chocButton.addEventListener("click", function () {
    chocCount++;
    chocCountDisplay.innerHTML = chocCount;
});

let pbCount = 0;
const pbButton = document.getElementById("pblikeButton");
let pbCountDisplay = document.getElementById("pbCount");
pbButton.addEventListener("click", function () {
    pbCount++;
    pbCountDisplay.innerHTML = pbCount;
});


