<template>
    <div class="container">
        <div>
            <h3 class="heading">Add Desk</h3>

            <div class="selectDiv">
                <p>Select Room:</p>
                <select class="select"  v-model="selectedRoom" name="" id="">
                    <option  disabled selected value="0">Select room</option>
                    <option v-for="room of rooms" :value="room._id">Room {{room._id}}</option>
                </select>
            </div>

            <div class="selectDiv">
                <p>Select size:</p>
                <select class="select"  v-model="deskSize" name="" id="">
                    <option  disabled selected value="0">Select size</option>
                    <option value="Small">Small</option>
                    <option value="Big">Big</option>
                </select>
            </div>

            <div class="selectDiv">
                <p>Select position:</p>
                <select class="select"  v-model="deskPosition" name="" id="">
                    <option  disabled selected value="0">Select size</option>
                    <option value="Next to window">Next to window</option>
                    <option value="Center">Center</option>
                    <option value="Next to door">Next to door</option>
                </select>
            </div>

            <div class="selectDiv">
                <p>Enter price:</p>
                <input class="select" v-model="deskPrice" type="text">
            </div>

            <button @click="addDesk" class="btn">Add</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedRoom: '0',
            deskSize: '0',
            deskPosition: '0',
            deskPrice: '0',
        }
    },
    computed: {
        rooms() {
            return this.$store.state.rooms.rooms
        }
    },
    methods: {
        addDesk() {
            if (this.selectedRoom !== '0' && this.deskSize !== '0' && this.deskPosition !== '0' && this.deskPrice !== '0' && Number.isInteger(Number(this.deskPrice))  && Number(this.deskPrice) !== 0)   {
                this.$store.commit('desks/addNewDesk', [this.selectedRoom, this.deskSize, this.deskPosition, this.deskPrice]);
                const newDesk = this.$store.state.desks.desks[this.$store.state.desks.desks.length - 1];
                this.$store.commit('rooms/addNewDesk', [newDesk.roomId, newDesk._id])
            }
        }
    }
}
</script>

<style scoped>




.heading {
    text-align: center;
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 12px;

}
.container {
    padding: 10px 20px;
    height: 220px;
    margin: 0 auto;
    width: fit-content;
    border: 1px solid #fff;
    border-radius: 10px;
    margin-bottom: 10px;

    position: relative;
}

.btn {
    display: block;
    margin: 0 auto;

}

.select {
    margin-left: 5px;
    height: 18px;
    width: 120px;
}

.selectDiv {
    display: flex;
    justify-content: space-between;
    color: white;
    font-size: 13px;
    margin-bottom: 12px;
}

p {
    color: #fff;
    margin-bottom: 12px;
    font-size: 15px;
}



</style>
