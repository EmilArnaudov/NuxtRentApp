<template>
    <div v-on="freeSpots ? { click: handleNavigate } : {}" class="card" :class="freeSpots ? '' : 'noFreeSpots'">
        <div class="imageContainer">
            <img v-if="room.size === 'Big'" src="../assets/images/room-big.jpg" alt="bigRoom">
            <img v-else src="../assets/images/room-small.jpg" alt="smallRoom">
        </div>
        <div class="content">
            <h1 class="cardHeading">ROOM {{i+1}}</h1>
            <p class="size">Size: <span>{{room.size}}</span></p>
            <p class="free">Free spots: <span>{{freeSpots}}</span></p>
            <p class="cardDesc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, quia.</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['room', 'i'],
        data() {
            return {

            }
        },
        computed: {
            freeSpots() {
                return this.room.deskCapacity - this.room.desksTaken - 6
            },
        },
        methods: {
            handleNavigate() {
                console.log('inside navigate');
                this.$router.push(`rooms/${this.room._id}`)
            }
        }
    }
</script>

<style scoped>

.cardHeading {
    margin: 8px 0;
    color: #fff;
    font-size: 21px;
    font-weight: bold;
    text-align: center;
}

.cardDesc {
    color: #fff;
    font-size: 15px;
    line-height: 20px;
}

.content > p {
    margin-bottom: 8px;
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
.card {
    background-color: #D4AD76;
    padding: 8px;
    border-radius: 8px;
    transition: all 300ms ease-in;
    cursor: pointer;
    height: 400px;
}



.card:hover {
    border: 1px solid white;

}
 .imageContainer > img {
    width: 100%;
    height: 220px;
 }


 .noFreeSpots:hover {
    border: none;
 }
 .noFreeSpots {
    cursor: default;
    position: relative;
    opacity: 0.5;
 }

</style>