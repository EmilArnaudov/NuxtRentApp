
class Room {
    constructor(id, deskCapacity, size, name, deskIds) {
        this._id = id;
        this.name = name;
        this.deskCapacity = deskCapacity;
        this.size = size;
        this.deskIds = deskIds ? deskIds : [];
        this.desksTaken = 0;
        this.manager = 'admin';
    }

    toJSON() {
        return {...this}
    }
}

export default Room;