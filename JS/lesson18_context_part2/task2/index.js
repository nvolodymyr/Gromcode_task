export let wallet = {
    transactions: [1, 23, 4, 5, 5, 6, 7, 7, 8, 89, 9, -32],
    getMax() {
        return Math.max(...this.transactions);
    },
    getMin() {
        return Math.min(...this.transactions);
    },
}