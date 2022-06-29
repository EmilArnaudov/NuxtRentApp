<template>
    <div class="container">
        <div class="card">
            <div class="imageContainer">
                <img src="../assets/images/desk-card.jpg" alt="">
            </div>
            <div class="content">
                <div class="left">
                    <p class="roomName">Location {{room.name}} - Desk {{desk._id}}</p>
                    <div class="desc">
                        <p class="ch">Size: <span class="ct">{{desk.size}} </span></p>

                    </div>
                    <div class="desc">
                     <p class="ch">Position: <span class="ct">{{desk.position}}</span></p>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['desk', 'room'],
        data() {
            return {

            }
        }, 

    }
</script>

<style scoped>

.location {
    text-align: center;
    color: #fff;
    font-size: 22px;
    font-weight: 500;
    margin-top: 10px;
    margin-bottom: 45px;
}

.link {
    display: block;
    text-align: center;
    width: 80%;
    margin: 0 auto;
    margin-top: 20px;

    text-decoration: none;
    color: white;
    font-weight: 500;
    border: 1px solid white;
    background-color: transparent;
    padding: 8px 14px;
}
.container {
    width: 55%;
    margin: 0 auto;
}


.heading {
    font-size: 31px;
    font-weight: 500;
    color: #D4AD76;
    text-align: center;
    margin-bottom: 7px;
}

.card {
    background-color: #D4AD76;
    padding: 8px;
    border-radius: 8px;
    width: 70%;
    height: 85vh;
    margin: 0 auto;
}

.imageContainer {
    height: 380px;
    margin: 0 auto;
    overflow: hidden;
}

.imageContainer > img {
    width: 100%; /* or any custom size */
    height: 100%; 
    object-fit: contain;
    object-position: center;
}

.content {
    display: flex;
    padding: 10px;
}

.left {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.roomName {
    color: white;
    font-size: 31px;
    font-weight: bold;
}

.ch {
    color: white;
    font-size: 18px;
    font-weight: 500;
}

.ct {
    color: white;
    text-decoration: underline;
    font-size: 16px;
}

.desc {
    display: flex;
    flex-direction: column;
    gap: 7px;
}

.grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 20px;
    gap: 15px;
}



.cell {
    text-align: center;
    color: white;
    font-size: 12px;
    border: 1px solid white;
    padding: 6px 0;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    gap: 4px;
}

.icon {
    font-size: 25px;
    margin-bottom: 7px;
}

</style>