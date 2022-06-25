class Desk {
    constructor(price, size, position) {
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