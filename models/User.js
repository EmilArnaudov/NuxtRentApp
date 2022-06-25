export default class User {
    constructor(fullName, email, password, role) {
        this.fullName = fullName;
        this.email = email;
        this.password = password;
        this.role = role;
        this.rentedRooms = [];
    }

    toJSON() {
        return {...this}
    }
}

