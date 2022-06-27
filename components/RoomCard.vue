<template>
    <div class="card" v-bind:class="freeSpots ? '' : 'noFreeSpots'">
        <div class="imageContainer">
            <img src="../assets/images/room-big.jpg" alt="">
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
}



.card:hover {
    border: 1px solid white;

}
 .imageContainer > img {
    width: 100%;
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