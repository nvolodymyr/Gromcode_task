export let event = {
    message: 'Welcome to the party!',
    guests: [{
        name: 'John',
        age: 18,
        email: 'example@server.com'
    }, {
        name: 'John',
        age: 17,
        email: 'example@server.com'
    }, {
        name: 'John',
        age: 13,
        email: 'example@server.com'
    }, {
        name: 'John',
        age: 22,
        email: 'example@server.com'
    }, {
        name: 'John',
        age: 34,
        email: 'example@server.com'
    }, {
        name: 'John',
        age: 4,
        email: 'example@server.com'
    }],
    getInvitations: this.guests.filter(({ age }) => age >= 18).map(({ name, email }) => ({ email: `${email}`, message: `Dear ${name}! ${message}` })),

}