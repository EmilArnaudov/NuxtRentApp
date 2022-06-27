import {v4 as id} from 'uuid';

class Room {
    constructor(deskCapacity, size) {
        this._id = id();
        this.deskCapacity = deskCapacity;
        this.size = size;
        this.manager = '';
    }

    toJSON() {
        return {...this}
    }
}

export default Room;