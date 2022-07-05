<template>
    <div class="cardDesk">
        <div class="imageDiv">
            <img src="../assets/images/user.jpg" alt="">
        </div>
        <p class="ch"> {{user.fullName}}</p>
        <p class="ch"><span class="ct">{{user.email}} </span></p>
        <p class="ch"><span class="ct">{{user.role}}{{user.roomsManaged.length > 0 ? `: ${user.roomsManaged[0]}` : ''}}</span></p>
        <p class="ch">Rented desks: <span class="ct">{{user.rentedDesks.length}}</span></p>
        <div v-if="user.role === 'client'">
            <button v-if="!promoteActive" @click="promoteActive = true;" class="button">Promote</button>
            <div class="promote" v-if="promoteActive">
                <select name="" id="" v-model="roomId" >
                    <option disabled selected value="">Room ID</option>
                    <option v-for="room of roomsWithoutManager" :value="room._id">Room {{room._id}}</option>
                </select>
                <button :disabled="!roomId" @click="promote" class="button">Promote</button>
            </div>
        </div>
        <div v-if="user.role === 'RoomManager'">
            <button class="button red" @click="demote" >Demote</button>
        </div>

        <button v-if="user.role !== 'admin'" class="button red">Delete</button>

    </div>
</template>

<script>
export default {
    props: ['user'],
    data() {
        return {
            promoteActive: false,
            roomId: '',
        }
    },
    computed: {
        roomsWithoutManager() {
            return this.$store.state.rooms.rooms.filter(x => x.manager === 'admin');
        }
    },
    methods: {
        promote() {
            this.$store.commit('rooms/changeRoomManager', [this.roomId, this.user.email]);
            this.$store.commit('promoteToManager', this.user.email);
            this.$store.commit('addManagedRoom', [this.roomId, this.user.email])

            this.promoteActive = false
            this.roomId =  ''
        }, 
        demote() {
            console.log(this.user.roomsManaged[0]);
            this.$store.commit('rooms/demoteRoomManager', this.user.roomsManaged[0]);
            this.$store.commit('demoteManager', this.user.email);
            this.$store.commit('removeManagedRoom', [this.roomId, this.user.email])
        }, 
    }
}
</script>

<style scoped>
.button {
    font-weight: 500;
    border: none;
    border: 1px solid #fff;
    color: #fff;
    background-color: transparent;
    cursor: pointer;
    padding: 4px 8px;
}

.red {
    color: red;
    border-color: red;
}
.promote {
    display: flex;
    flex-direction: column;
    gap: 6px;
}
.ch {
    color: white;
    font-weight: 500;
}

.imageDiv {
    width: 110px;
    height: 110x;
}

.imageDiv > img {
    width: 110px;
    height: 110x;
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
