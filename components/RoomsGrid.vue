<template>
<div class="container">
    <div v-for="(room, i) of allRooms">
        <RoomCard :room="room" :i="i"></RoomCard>
    </div>
</div>
</template>

<script>
export default {
    props: ['allRooms']
}
</script>

<style scoped>
.container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 40px;
    width: 75%;
}
</style>