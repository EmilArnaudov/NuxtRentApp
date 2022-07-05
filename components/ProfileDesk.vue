<template>
    <div class="cardDesk">
        <div class="deskImageContainer">
            <img src="../assets/images/desk-card.jpg" alt="desk">
        </div>
        <div>
            <div class="fh">
                <p class="ch"> Room{{desk.roomId}} - Desk {{desk._id}}</p>
                <p class="ch"><span class="ct">{{desk.size}} </span></p>
                <p class="ch"><span class="ct">{{desk.position}}</span></p>
                <p class="ch">Rented until: <span class="ct">{{desk.freeOn}}</span></p>
            </div>
            <div class="center">
                <button class="button">Go to desk</button>
                <button class="button red">Cancel</button>
            </div>
        </div>


    </div>
</template>

<script>
export default {
    props: ['desk'],
}
</script>

<style scoped>

.button {
    padding: 6px 10px;
    color: #fff;
    border: none;
    border: 1px solid #fff;
    background-color: transparent;
    cursor: pointer;
    font-weight: 600;
}

.red {
    color: rgb(255, 50, 50);
    margin-left: 12px;
    border-color: rgb(255, 50, 50);;
}
.center {
    text-align: center;
}
.fh {
    display: flex;
    gap: 12px;
    margin-bottom: 15px;
}
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
