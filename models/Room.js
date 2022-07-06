
class Room {
    constructor(id, deskCapacity, size, name, deskIds, manager) {
        this._id = id;
        this.name = name;
        this.size = size;
        this.deskIds = deskIds ? deskIds : [];
        this.desksTaken = 0;
        this.manager = manager ? manager : 'admin';
    }

    get deskCapacity() {
        return this.deskIds.length
    }

    toJSON() {
        return {...this}
    }
}

export default Room;