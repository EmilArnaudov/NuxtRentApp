import {v4 as id} from 'uuid';

class Desk {
    constructor(id, price, size, position) {
        this._id = id;
        this.price = price;
        this.size = size;
        this.position = position;
        this.isTaken = false;
        this.timePaidFor = null;
    }

    toJSON() {
        return {...this}
    }
}

export default Desk;