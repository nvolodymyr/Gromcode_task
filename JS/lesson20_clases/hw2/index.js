export class User {
    constructor(id, name, sessionId) {
        this._id = id;
        this._name = name;
        this._sessionId = sessionId;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get sessionId() {
        return this._sessionId;
    }

}
export class UserRepository {
    constructor(users) {
        this._users = Object.freeze(users);
    }
    get users() {
        return this._users;
    }
    getUserNames() {
        return this._users.map(({ _name }) => _name);
    }
    getUserIds() {
        return this._users.map(({ _id }) => _id);
    }
    getUserNameById(userId) {
        const user = this._users.find(({ _id }) => _id === userId);
        return user ? user._name : null;
    }
}