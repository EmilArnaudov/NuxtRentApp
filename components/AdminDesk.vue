<template>
    <div class="cardDesk">
        <div class="deskImageContainer">
            <img src="../assets/images/desk-card.jpg" alt="desk">
        </div>
        <p class="ch"> Room{{desk.roomId}} - Desk {{desk._id}}</p>
        <p class="ch"><span class="ct">{{desk.size}} </span></p>
        <p class="ch"><span class="ct">{{desk.position}}</span></p>
        <p class="ch">Rented until: <span class="ct">{{desk.freeOn}}</span></p>

    </div>
</template>

<script>
export default {
    props: ['desk'],
}
</script>

<style scoped>

.ch {
    color: white;
    font-weight: 500;
}
.cardDesk {
    display: flex;
    border: 1px solid #26261E;
    border-radius: 4px;
    gap: 27px;
    align-items: center;
}

.deskImageContainer {
    width: 20%;
}

.deskImageContainer > img {
    width: 100%;
}
</style>
