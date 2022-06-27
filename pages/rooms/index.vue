<template>
    <div>
        THIS IS THE ALL ROOMS PAGE
        <div v-for="room of allRooms">
            {{room._id}}
        </div>

        <div class="bg"></div>
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