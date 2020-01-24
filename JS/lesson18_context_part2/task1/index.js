  export let event = {
          message: 'Welcome to the party!',
          guests: [{
              name: 'John',
              age: 18,
              email: 'example@server.com'
          }, {
              name: 'ron',
              age: 17,
              email: 'example@server.com'
          }, {
              name: 'ivsn',
              age: 13,
              email: 'example@server.com'
          }, {
              name: 'taras',
              age: 22,
              email: 'example@server.com'
          }, {
              name: 'maria',
              age: 34,
              email: 'example@server.com'
          }, {
              name: 'solomia',
              age: 4,
              email: 'example@server.com'
          }],
          getInvitations() {
              return this.guests.filter(({ age }) => age >= 18).map(({ name, email }) => ({ email: `${email}`, message: `Dear ${name}! ${this.message}` }));
          },
      }
      // console.log(event.getInvitations());