export let vehicle = {
    move() {
        console.log(`${this.name} is moving`);
    },
    stop() {
        console.log(`${this.name} stopped`)
    }
}
export let ship = {
    name: 'Argo',
    startMachine() {
        console.log(`${this.name} lifting anchor up`);
        ship.move();
    },
    stopMachine() {
        console.log(`${this.name} lifting anchor down`)
        ship.stop();
    }
}
Object.setPrototypeOf(ship, vehicle);
// ship.startMachine();
// ship.stopMachine();