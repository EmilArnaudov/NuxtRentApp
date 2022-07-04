<template>
    <div class="container">
        <div class="card">
            <div class="imageContainer">
                <img v-if="room.size === 'Big'" src="../assets/images/room-big.jpg" alt="">
                <img v-if="room.size === 'Small'" src="../assets/images/room-small.jpg" alt="">
            </div>
            <div class="content">
                <div class="left">
                    <p class="roomName">{{room.name}}</p>
                    <div class="desc">
                        <p class="ch">Capacity</p>
                        <p class="ct">Up to {{room.deskCapacity}} people</p>
                    </div>
                    <div class="desc">
                        <p class="ch">Free Seats</p>
                        <p class="ct">{{free}} seats</p>
                    </div>
                </div>
                <div class="right">
                    <div class="grid">
                        <div class="cell">
                            <span class="icon"><i class="fa-solid fa-wifi"></i></span>
                            <p>Fast Wi-fi</p>
                        </div>
                        <div class="cell">
                            <span class="icon"><i class="fa-solid fa-mug-saucer"></i></span>
                            <p>Coffee & Tea</p>
                        </div>
                        <div class="cell">
                            <span class="icon"><i class="fa-solid fa-tv"></i></span>
                            <p>Smart TV</p>
                        </div>
                    </div>

                    <NuxtLink class="link" :to="`/rooms/${room._id}/desks`">Check availability</NuxtLink>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        }, 
        computed: {
            room() {
                const id = Number(this.$route.params.roomId)
                const room = this.$store.state.rooms.rooms.find(x => x._id === id);

                return room;
            },

            free() {
                return this.room.deskCapacity - this.room.desksTaken
            }
        }
    }
</script>

<style scoped>

.link {
    display: block;
    text-align: center;
    width: 80%;
    margin: 0 auto;
    margin-top: 20px;

    text-decoration: none;
    color: white;
    font-weight: 500;
    border: 1px solid white;
    background-color: transparent;
    padding: 8px 14px;
}
.container {
    width: 55%;

    margin: 0 auto;
}

.card {
    background-color: #D4AD76;
    padding: 8px;
    border-radius: 8px;
    width: 70%;
    height: 85vh;
    margin: 0 auto;
}

.imageContainer {
    height: 380px;
    margin: 0 auto;
    overflow: hidden;
}

.imageContainer > img {
    width: 100%; /* or any custom size */
    height: 100%; 
    object-fit: contain;
    object-position: center;
}

.content {
    display: flex;
    padding: 10px;
}

.left {
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.right {
width: 60%;
}

.roomName {
    color: white;
    font-size: 31px;
    font-weight: bold;
}

.ch {
    color: white;
    font-size: 18px;
    font-weight: 500;
}

.ct {
    color: white;
    text-decoration: underline;
}

.desc {
    display: flex;
    flex-direction: column;
    gap: 7px;
    margin-bottom: 20px;
}

.grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 20px;
    gap: 15px;
}



.cell {
    text-align: center;
    color: white;
    font-size: 12px;
    border: 1px solid white;
    padding: 6px 0;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    gap: 4px;
}

.icon {
    font-size: 25px;
    margin-bottom: 7px;
}

</style>