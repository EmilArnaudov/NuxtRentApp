<template>
    <div class="wrapper">
        <RoomDetails></RoomDetails>
        <div class="userInfo">
        <UserBookings/>
        </div>
        <NuxtChild></NuxtChild>    
    <div class="bg"></div>
    </div>
</template>

<script>
    export default {
    data() {
        return {};
    },
}
</script>


<style scoped>
.wrapper {
    background: #26261E;
    padding: 35px;
    padding-top: 15px;
    display: flex;
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

.userInfo {
    width: 25%;
}
</style>