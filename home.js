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
const button = document.getElementById("cinlikeButton");
let countDisplay = document.getElementById("cinCount");
button.addEventListener("click", function () {
    cinCount++;
    countDisplay.innerHTML = cinCount;
});


