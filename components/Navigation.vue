<template>
    <header class="header">
        <nav class="navigation">
            <span>
                <NuxtLink class="logo" to="/">Rentworks.</NuxtLink>
            </span>
            <ul class="navItems">
                <li v-if="currentUser">
                <span class="greetings">Hello, {{currentUser.fullName}}!</span>
                </li>
                <li v-if="!currentUser">
                    <NuxtLink class="navLink" to="/register">Register</NuxtLink>
                </li>
                <li v-if="!currentUser">
                    <NuxtLink class="navLink" to="/login">Login</NuxtLink>
                </li>
                <li v-if="currentUser">
                    <NuxtLink class="navLink" to="/rooms">Rooms</NuxtLink>
                </li>
                <li v-if="currentUser">
                    <NuxtLink class="navLink" to="/profile">Profile</NuxtLink>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>

    export default {
        data() {
            return {
        
            }
        },
        methods: {
            handleLogin(e) {
                this.$store.commit('login')
            }
        },
        computed: {
            currentUser() {
                return this.$store.state.currentUser
            }
        }
    }

</script>

<style scoped>
.header {
    padding: 20px 35px;
    background-color: transparent;
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 100;
    background-color: transparent;
}

.navigation {
    display: flex;
    justify-content: space-between;
    max-width: 1300px;
    margin: 0 auto;
}

.greetings {
    color: white;
    font-size: 20px;
}

.logo {
    text-decoration: none;
    color: #be8836;
    text-transform: uppercase;
    font-size: 20px;
    font-family: 'Times New Roman', Times, serif;
    font-weight: 600;
}

.navItems {
    display: flex;
    gap: 20px
}

.navLink {
    text-decoration: none;
    color: rgb(255, 255, 255);
    font-size: 18px;
    padding: 8px 12px;
    background-color: transparent;
    transition: all 300ms ease-in;
}

.navLink:hover {
    cursor: pointer;
    font-size: 19px;
    color: rgb(218, 218, 218);
}

</style>