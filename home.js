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


//track likes for each cookie and keep track in localstorage



cinClickCounter();

function cinClickCounter() {
    if (localStorage.cinclickcount) {
        localStorage.cinclickcount = Number(localStorage.cinclickcount)+1;
    }
    else {
        localStorage.cinclickcount = 1;
    }
    document.getElementById("cinCount").innerHTML = localStorage.cinclickcount;
}

chocClickCounter();

function chocClickCounter() {
    if (localStorage.chocclickcount) {
        localStorage.chocclickcount = Number(localStorage.chocclickcount)+1;
    }
    else {
        localStorage.chocclickcount = 1;
    }
    document.getElementById("chocCount").innerHTML = localStorage.chocclickcount;
}


pbClickCounter();

function pbClickCounter() {
    if (localStorage.pbclickcount) {
        localStorage.pbclickcount = Number(localStorage.pbclickcount)+1;
    }
    else {
        localStorage.pbclickcount = 1;
    }
    document.getElementById("pbCount").innerHTML = localStorage.pbclickcount;
}
