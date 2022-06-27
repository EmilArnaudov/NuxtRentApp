<template>
    <div class="wrapper">
        THIS IS THE ROOM {{params.roomId}} PAGE

    <div class="bg"></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {

        }},
        computed: {
            params() {
                return this.$route.params
            }
        }

    }
</script>


<style scoped>
.wrapper {
    background: #26261E;
    padding: 50px;
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
</style>