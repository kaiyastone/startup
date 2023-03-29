class CookieHome {

    constructor() {
        this.likes = likes;

        const playerNameEl = document.querySelector('.player-name');
        playerNameEl.textContent = this.getPlayerName();
    }

    getPlayerName() {
        return localStorage.getItem('userName') ?? 'Mystery player';
}

    //getLikes() {
    //    return localStorage.getItem('likes');
    //}
}

const cookieHome = new CookieHome();