<template>
    <div class="deskDetailsWrapper">
        <DeskDetails :desk='desk' :room="room" />
        <div class="userInfo">
        <UserBookings/>
        </div>
        <div class="bg"></div>
    </div>


</template>

<script>
    export default {

    data() {
        return {};
    },
    computed: {
        desk() {
            const id = Number(this.$route.params.deskId)
            const desk = this.$store.state.desks.desks.find(x => x._id === id);
            console.log(id, desk);
            return desk;
        },
        room() {
            const id = Number(this.$route.params.roomId)
            const room = this.$store.state.rooms.rooms.find(x => x._id === id);
            return room;
        },
        }

}
</script>

<style scoped>

.deskDetailsWrapper {
    background: #26261E;
    display: flex;
    padding: 20px;
}


.userInfo {
    width: 25%;
}

.bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #26261E;
    z-index: -100;
}
</style>