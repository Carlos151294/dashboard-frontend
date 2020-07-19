class TokenTimer {
    constructor(tokenTimer) {
        this.tokenTimer = tokenTimer;
    }

    setTokenTimer(timer) {
        this.tokenTimer = timer;
    }

    getTokenTimer() {
        return this.tokenTimer;
    }
}

export default new TokenTimer();