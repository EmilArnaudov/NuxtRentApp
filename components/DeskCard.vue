<template>
    <div :class="!desk.isTaken ? '' : 'isTaken'" class="deskCard">
        <div class="imageContainer">
            <img src="../assets/images/desk-card.jpg" alt="desk">
        </div>
        <div class="content">
            <p class="size">Size: <span>{{desk.size}}</span></p>
            <p class="free">Position: <span>{{desk.position}}</span></p>
            <p class="price">Price: <span>${{desk.price}} per week</span></p>
            <p class="available">Available: <span :class="desk.isTaken ? 'red' : 'green'">{{desk.isTaken ? 'in 10 days' : 'Yes'}}</span> </p>
            <button v-if="!desk.isTaken" @click="handleShowForm" class="btnD">Rent</button>
        </div>
    </div>    
</template>

<script>
export default {
    props: ['desk', 'room'],
    data() {
        return {
            showForm: false,
        }
    },
    methods: {
        handleNavigate() {
            this.$router.push(`/rooms/${this.room._id}/desks/${this.desk._id}`)
        },
        handleShowForm() {
            this.$store.commit('desks/selectDeskToRent', this.desk)
            this.$emit('showForm');
        },
        rentDesk() {
            this.$store.commit('desks/rentDesk', this.desk._id);
        }
    },
    // mounted() {
    //     this.$store.commit('desks/rentDesk', this.desk._id);
    // }
}

</script>

<style>

.deskCard {
    background-color: #D4AD76;
    padding: 8px;
    border-radius: 8px;
    transition: all 300ms ease-in;
    height: 400px;
}

.btnD {
    display: block;
    margin: 0 auto;
    padding: 8px 12px;
    font-weight: 600;
    background-color: transparent;
    color: white;
    border: 1px solid white;
    cursor: pointer;
}

.price {
    color: #fff;
    font-weight: bold;
}

.available {
    color: #fff;
    font-weight: bold;
}

.content {
    padding: 8px;
}

.content > p {
    margin-bottom: 14px;
    color: #fff;
}

.content > p > span {
    text-decoration: underline;
}
.cardDesc {
    margin-top: 20px;
}

.size,
.free {
    font-weight: bold;
}

.imageContainer > img {
    width: 100%;
    height: 220px;
 }


 .isTaken {
    cursor: default;
    position: relative;
    opacity: 0.5;
 }

 .red {
    color: rgb(237, 84, 84);
 }

 .green {
    color: rgb(60, 145, 60);
 }

</style>
