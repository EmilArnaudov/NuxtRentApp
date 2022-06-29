<template>
    <div class="wrapper">
        <RoomsGrid :allRooms="allRooms"></RoomsGrid>
        <div class="userInfo">
        <UserBookings/>
        </div>
        <div class="bg"></div>
        <NuxtChild/>
    </div>


</template>


<script>
export default {
    data() {
        return {

        }
    },
    computed: {
        allRooms() {
            return this.$store.state.rooms.rooms
        }
    }
}

</script>


<style scoped>

.wrapper {
    background: #26261E;
    padding: 50px;
    display: flex;
    gap: 30px;
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