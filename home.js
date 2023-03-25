class CookieHome {

    constructor() {
        const playerNameE1 = document.querySelector('.player-name');
        playerNameE1.textContent = this.getPlayerName();
    }

    getPlayerName() {
        return localStorage.getItem('userName') ?? 'Mystery player';
}
}