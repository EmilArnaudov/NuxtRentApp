import {v4 as id} from 'uuid';

class Desk {
    constructor(id, price, size, position, roomId) {
        this._id = id;
        this.price = price;
        this.size = size;
        this.position = position;
        this.roomId = roomId;
        this.freeOn = null;
        this.isTaken = false;
        this.timePaidFor = null;
        this.rentedBy = null;
    }

    toJSON() {
        return {...this}
    }
}

export default Desk;