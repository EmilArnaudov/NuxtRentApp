import {v4 as id} from 'uuid';

export default class User {
    constructor(fullName, email, password, role, roomsManaged) {
        this._id = id();
        this.fullName = fullName;
        this.email = email;
        this.password = password;
        this.role = role ? role : 'client';
        this.roomsManaged = roomsManaged ? roomsManaged : [];
        this.rentedDesks = [];
    }

    toJSON() {
        return {...this}
    }
}

