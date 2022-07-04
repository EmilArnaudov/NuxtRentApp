<template>
    <div class="container">
        <div v-if="!deskRented && !desk.isTaken">
            <h3 class="heading">Rent Desk</h3>
            <p class="p">Location: {{location}}</p>
            <p class="p">Size: {{desk.size}}</p>
            <p class="p">Position: {{desk.position}}</p>
            <div class="duration">
                <p>Duration:</p>
                <select @click='click'  v-model="selectedDuration" name="" id="">
                    <option selected disabled value="0">Select duration</option>
                    <option value="1">1 week</option>
                    <option value="2">2 weeks</option>
                    <option value="3">3 weeks</option>
                    <option value="4">4 weeks</option>
                </select>
            </div>
            <p class="p">Amount to pay: ${{amount}}</p>
            <button @click="rentDeskHandler" class="">Rent Desk</button>
        </div>
        <div class="successDiv" v-else>
            <span class="yesIcon"><i class="fa-solid fa-check"></i></span>
            <p class="success">Desk rented successfully!</p>
            <NuxtLink class="deskLink" :to="`desks/${desk._id}`">See desk</NuxtLink>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                selectedDuration: '1',
                deskRented: false
            }
        },
        computed: {
            desk() {
                return this.$store.state.desks.selectedDeskToRent 
            },
            location() {
                console.log(this.desk);
                return `Room ${this.$route.params.roomId} -> Desk ${this.desk._id}`;
            },
            amount() {
                return Number(this.desk.price) * Number(this.selectedDuration);
            },
            currentUser() {
                return this.$store.state.currentUser
            }

        },
        methods: {
            click(e) {
                this.amountT = Number(this.desk.price) * Number(e.target.value)
            },
            rentDeskHandler(e) {
                this.$store.commit('desks/rentDesk', [this.desk._id, this.currentUser.email, this.selectedDuration]);
                this.$store.commit('rooms/rentDesk', this.desk.roomId);
                this.$store.commit('addRentedDesk', this.desk._id);
                this.deskRented = true;
                
                setInterval(() => {
                    this.deskRented = false;
                }, 300)
            }
        },
    }
</script>

<style scoped>
.yesIcon {
    padding: 8px 16px;
    font-size: 28px;
    border-radius: 50%;
    background-color: green;
    color: #fff;
}

.deskLink {
    text-decoration: none;
    color: rgb(154, 44, 251);
}

.success {
    font-size: 20px;
    color: white;
    margin-top: 20px;
    margin-bottom: 15px;
}

.successDiv {
    text-align: center;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}


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
    width: 100%;
    border: 1px solid #fff;
    border-radius: 10px;
    margin-bottom: 10px;

    position: relative;
}
.container > button {
    color:#26261E;
    background-color: #fff;
    border: 1px solid #fff;
    font-weight: 600;
    cursor: pointer;
    display: block;
    margin: 0 auto;
    margin-top: 20px;
}

.duration {
    display: flex;
    color: white;
    font-size: 13px;
    margin-bottom: 12px;
}

.p {
    color: #fff;
    margin-bottom: 12px;
    font-size: 13px;
}



</style>

