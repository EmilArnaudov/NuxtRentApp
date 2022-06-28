<template>
    <div class="card">
        <div class="imageContainer">
            <img src="../assets/images/room-small.jpg" alt="smallRoom">
        </div>
        <div class="content">
            <h1 class="cardHeading"></h1>
            <p class="size">Size: <span></span></p>
            <p class="free">Free spots: <span></span></p>
            <p class="cardDesc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, quia.</p>
        </div>
    </div>    
</template>

<script>

</script>

<style>

.card {
    background-color: #D4AD76;
    padding: 8px;
    border-radius: 8px;
    transition: all 300ms ease-in;
    cursor: pointer;
    height: 400px;
}

.cardHeading {
    margin: 8px 0;
    color: #fff;
    font-size: 21px;
    font-weight: bold;
    text-align: center;
}

.cardDesc {
    color: #fff;
    font-size: 15px;
    line-height: 20px;
}

.content > p {
    margin-bottom: 8px;
    color: #fff;
}

.content > p > span {
    text-decoration: underline;
}
.cardDesc {
    margin-top: 20px;
}

.size,
.free {
    font-weight: bold;
}

.imageContainer > img {
    width: 100%;
    height: 220px;
 }


 .noFreeSpots:hover {
    border: none;
 }
 .noFreeSpots {
    cursor: default;
    position: relative;
    opacity: 0.5;
 }

</style>
