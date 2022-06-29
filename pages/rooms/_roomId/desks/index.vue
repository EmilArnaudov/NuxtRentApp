<template>
    <div class="wrapper">
        <div class="gridContainer">
            <h1 class="heading">Available Desks</h1>
            <p></p>
            <DesksGrid/>
        </div>
        
        <div class="userInfo">
        <UserBookings/>
        </div>
        <div class="bg"></div>
    </div>
</template>

<script>

</script>

<style scoped>
.wrapper {
    background: #26261E;
    display: flex;
    padding: 20px;
}

.gridContainer {
    width: 75%;
    display: flex;
    flex-direction: column;
}

.heading {
    font-size: 31px;
    font-weight: 500;
    color: #D4AD76;
    text-align: center;
    margin-bottom: 7px;
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