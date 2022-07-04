<template>
    <div class="wrapper">
        <div class="card">
            <div class="content">
                <div class="imageContainer">
                    <img src="../../assets/images/user.jpg" alt="">
                </div>
                <p>{{user.fullName}}</p>
                <p>{{user.email}}</p>
            </div>
            <div class="desks">
                <div v-for="desk of desks">
                    <ProfileDesk :desk="desk" ></ProfileDesk>
                </div>
            </div>
        </div>

        <div class="bg"></div>
    </div>
</template>

<script>
export default {
    middleware: "auth",
    computed: {
        user() {
            return this.$store.state.currentUser;
        },
        desks() {
            const desksArr = [];
            const deskIds = this.$store.state.currentUser.rentedDesks;
            const allDesks = this.$store.state.desks.desks;
            allDesks.forEach((x) => {
                if (deskIds.includes(x._id)) {
                desksArr.push(x);
                }
            })
            return desksArr;
      }
    },


}
</script>

<style scoped>

.imageContainer {
    margin: 0 auto;
    width: 100px;
    height: 100px;
}

.desks {
    display: flex;
    flex-direction: column;
    padding: 35px;
    gap: 15px;
}

.imageContainer > img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
}
.content {
    width: 100%;
    height: 100%;
    text-align: center;
    padding: 40px;
}

.content > p {
    font-size: 24px;
    font-weight: 500;
    margin-top: 12px;
}
.card {
    max-width: 800px;
    margin: 0 auto;
    background-color: #D4AD76;
    border-radius: 4px;
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