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
            this._users = Object.freeze(users);
        }
        // getUserNames() {
        //     return this._users.map(({ name }) => name);
        // }
    getUserIds() {
        return this._users.map(({ id }) => id);
    }
    getUserNameById(userId) {
        const user = this._users.find(({ id }) => id === userId);
        return user ? user.name : null;
    }
}