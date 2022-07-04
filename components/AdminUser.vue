<template>
    <div class="cardDesk">
        <p class="ch"> {{user.fullName}}</p>
        <p class="ch"><span class="ct">{{user.email}} </span></p>
        <p class="ch"><span class="ct">{{user.role}}</span></p>
        <p class="ch">Rented desks: <span class="ct">{{user.rentedDesks}}</span></p>

    </div>
</template>

<script>
export default {
    props: ['user'],
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
