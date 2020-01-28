export class User {
    constructor(id, name, sessionId) {
        this.id = id;
        this.name = name;
        this.sessionId = sessionId;
    }
    get getId() {
        return this.id;
    }
    get getname() {
        return this.name;
    }
    get getsessionId() {
        return this.sessionId;
    }

}
export class UserRepository {
    constructor(users) {
        this.users = Object.freeze(users);
    }
    get getUsers() {
        return this.users;
    }
    get getUserNames() {
        return this.users.map(({ name }) => name);
    }
    get getUserIds() {
        return this.users.map(({ id }) => id);
    }
    get getUserNameById(userId) {
        const user = this.users.find(({ id }) => id === userId);
        return user ? user.name : null;
    }
}