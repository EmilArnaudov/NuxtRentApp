<template>
    <div class="cardDesk">

        <div class="deskImageContainer">
            <img src="../assets/images/desk-card.jpg" alt="desk">
        </div>
        <div>
            <div class="flex">
                <p class="ch"> Room {{desk.roomId}} - Desk {{desk._id}}</p>
                <p class="ch"><span class="ct">{{desk.size}} </span></p>
                <p class="ch"><span class="ct">{{desk.position}}</span></p>
                <p class="ch" :class="!desk.freeOn ? 'n' : ''"><span class="ct">{{desk.freeOn ? desk.freeOn : 'Not rented yet'}}</span></p>
                <p class="ch" :class="!desk.freeOn ? 'n' : ''"><span class="ct">{{desk.rentedBy}}</span></p>
            </div>
            <div class="buttons">
                <button @click="removeDesk" class="button red">Remove Desk</button>
                <button @click="freeDesk" :class="!desk.isTaken ? 'op' : ''" :disabled="!desk.isTaken" class="button red">Free Desk</button>
            </div>
        </div>


    </div>
</template>

<script>
export default {
    props: ['desk'],
    methods: {
        freeDesk() {
            this.$store.commit('removeRentedDesk', [this.desk._id, this.desk.rentedBy]);
            this.$store.commit('desks/freeDesk', this.desk._id);
            this.$store.commit('rooms/freeDesk', [this.desk.roomId, this.desk._id]);
        },
        removeDesk() {
            if (this.desk.isTaken) {
                this.$store.commit('removeRentedDesk', [this.desk._id, this.desk.rentedBy]);
                this.$store.commit('rooms/freeDesk', [this.desk.roomId, this.desk._id]);
            }
            this.$store.commit('rooms/deleteDesk', [this.desk.roomId, this.desk._id]);
            this.$store.commit('desks/deleteDesk', this.desk._id);
        }
    }
}
</script>

<style scoped>
.red {
    font-weight: 500;
    color: red;
    border: none;
    border: 1px solid red;
    background-color: transparent;
    cursor: pointer;
}

.n {
    font-style: italic;
}
.buttons {
    display: flex;
    gap: 12px;
}
.flex {
    display: flex;
    gap: 27px;
}

.op {
    opacity: 0.5;
    cursor: default;
}
.ch {
    color: white;
    font-weight: 500;
}
.cardDesk {
    display: flex;
    border: 1px solid #26261E;
    border-radius: 4px;
    gap: 27px;
    align-items: center;
}

.deskImageContainer {
    width: 20%;
}

.deskImageContainer > img {
    width: 100%;
}
</style>
