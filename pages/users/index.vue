<template>
    <div class="wrapper">


        <div class="bg"></div>
    </div>
</template>

<script>
export default {
    middleware: 'isAdmin',
}
</script>

<style scoped>
.wrapper {
    background: #26261E;
    padding: 60px;
    padding-top: 30px;
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