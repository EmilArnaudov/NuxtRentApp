<template>
    <div class="wrapper">
        <div class="card">
            <h1>Admin Panel - Desks</h1>
            <div v-for="desk of desks">
                <AdminDesk :desk="desk" ></AdminDesk>
            </div>
         </div>
        <div class="bg"></div>
    </div>
</template>

<script>
export default {
    middleware: 'isAdmin',
    computed: {
        desks() {
            return this.$store.state.desks.desks
        }
    }
}
</script>

<style scoped>
h1 {
    color: #fff;
    font-weight: 500;
    font-size: 18px;
    text-align: center;
}
.card {
    max-width: 800px;
    margin: 0 auto;
    background-color: #D4AD76;
    padding: 15px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    gap: 15px;
}
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