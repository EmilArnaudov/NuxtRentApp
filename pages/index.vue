<template>
    <div>
        <div class="headingContainer">
            <h1 class="heading">Find your personal work space</h1>
            <p class="subheading">We offer you a wide range of fully equipped workspaces and a positive work environment</p>
            <button class="btn">Get Started</button>
        </div>

        <div class="bg"></div>
        <div class="bg-dark"></div>
    </div>
</template>

<style scoped>

.headingContainer {
    max-width: 1300px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-top: 10%;
}

.heading {
    font-size: 45px;
    font-weight: bold;
    color: white;
}

.subheading {
    font-size: 20px;
    line-height: 28px;
    color: rgb(205, 205, 205);
    width: 40%;
}

.btn {
    background-color: transparent;
    max-width: fit-content;
    color: #be8836;
    border: 1px solid #be8836;
    padding: 12px 18px;
    font-size: 15px;
    font-weight: 500;
    margin-top: 36px;
    transition: all 400ms ease-in-out;
}

.btn:hover {
    cursor: pointer;
    background-color: #be8836;
    color: white;
}

.bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('~/assets/images/desk.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
        z-index: -100;

}

.bg-dark {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: black;
    opacity: 0.5;
    z-index: -100;
}

</style>