export class User {
    constructor(id, name, sessionId) {
        this._id = id;
        this._name = name;
        this._sessionId = sessionId;
    }

}
export class UserRepository {
    constructor(users) {
        this._users = Object.freeze(users);
    }
    get getUserNames() {
        return this._users.map(({ _name }) => _name);
    }
    get getUserIds() {
        return this._users.map(({ _id }) => _id);
    }
    get getUserNameById(userId) {
        const user = this._users.find(({ _id }) => _id === userId);
        return user ? user._name : null;
    }
}