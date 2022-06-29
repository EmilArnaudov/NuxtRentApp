<template>
<div>
    <h1 class="h">{{room.name}}</h1>
    <div class="grid">
        <div v-for="desk of desks" class="cell">
            <DeskCard :room="room" :desk="desk"/>
        </div>
    </div>
</div>

</template>


<script>

    export default {
    data() {
        return {};
    },
    computed: {
        room() {
            const roomId = Number(this.$route.params.roomId);
            const room = this.$store.state.rooms.rooms.find(x => x._id === roomId);
            return room;
        },
        desks() {
            let desks = [];

            this.room.deskIds.forEach(deskId => {
                const desk = this.$store.state.desks.desks.find(x => x._id === deskId);
                desks.push(desk);
            });
            return desks;
        }
    },
}
</script>

<style scoped>
.grid {
    grid-template-columns: 1fr 1fr 1fr;
    display: grid;
    padding: 20px;
    gap: 30px;
}

.h {
    font-size: 31px;
    font-weight: 500;
    color: #D4AD76;
    text-align: center;
    margin-bottom: 20px;
}

</style>

