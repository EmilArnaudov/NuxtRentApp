class Room {
    constructor(deskCapacity, size) {
        this.deskCapacity = deskCapacity;
        this.size = size;
        this.manager = '';
    }

    toJSON() {
        return {...this}
    }
}