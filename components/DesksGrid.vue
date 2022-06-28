<template>
    <div class="grid">
        <div v-for="desk of desks" class="cell">
            <DeskCard :desk="desk"/>
        </div>
    </div>
</template>


<script>

    export default {
    data() {
        return {};
    },
    computed: {
        desks() {
            let desks = [];
            const roomId = Number(this.$route.params.roomId);
            const room = this.$store.state.rooms.rooms.find(x => x._id === roomId);
            room.deskIds.forEach(deskId => {
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
    padding: 20px 50px;
    gap: 30px;

}

</style>

