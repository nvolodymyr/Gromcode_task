export let timer = {
    secondsPassed: 0,
    minsPassed: 0,
    timerInterval = 0,
    startTimer() {
        this.timerInterval = setInterval(() => {
            this.secondsPassed += 5;
            if (this.secondsPassed === 60) {
                this.minsPassed += 1;
                this.secondsPassed = 0;
            }
        }, 5000);
    },
    getTime() {
        return `${this.minsPassed}:${this.secondsPassed<10 ? '0'+this.secondsPassed:this.secondsPassed}`;
    },
    stopTimer() {
        clearInterval(this.timerInterval);
    },
    resetTimer() {
        this.minsPassed = 0;
        this.secondsPassed = 0;
    }
}