<template>
    <div>

        <div class="formContainer">
            <h1 class="heading">Register</h1>

            <form @submit="handleRegister" class="form">
            <div class="inputFields">
                <label class="label" for="email">Email</label>
                <input class="input" type="text" name="email" id="email">
            </div>

            <div class="inputFields">
                <label class="label" for="fullName">Full Name</label>
                <input class="input" type="text" name="fullName" id="fullName">
            </div>

            <div class="inputFields">
                <label class="label" for="password">Password</label>
                <input class="input" type="password" name="password" id="password">
            </div>

            <div class="btnContainer">
                <button class="btn">Register</button>
            </div>

            <div class="error" v-if="error">
                {{error}}
            </div>

            <div class="horizontal"></div>

            <p class="para">Already have an account? <NuxtLink class="link" to="/login">Log In</NuxtLink></p>

            </form>
        </div>

        <div class="bg"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            fullName: '',
            email: '',
            password: '',
        }
    },
    methods: {
        handleRegister(e) {
            e.preventDefault();
            this.$store.commit('register', [fullName.value, email.value, password.value]);
        }
    },
    computed: {
        error() {
            return this.$store.state.error;
        }
    }
}

</script>

<style scoped>

    .error {
        text-align: center;
        font-size: 14px;
    color: rgb(176, 0, 0);
    }
    .formContainer {
        max-width: 350px;
        margin: 0 auto;
        margin-top: 3%;
        background-color: #B27732;
        border-radius: 4px;
        -webkit-box-shadow: 0px 0px 41px -11px #D4AD76; 
        box-shadow: 0px 0px 41px -11px #D4AD76;
}

    .heading {
        font-size: 20px;
        text-align: center;
        padding-top: 20px;
        margin-bottom: 20px;
    }

    .form {
        display: flex;
        flex-direction: column;

        padding: 16px 32px;
        gap: 16px;
    }

    .horizontal {
        width: 100%;
        height: 1px;
        background-color: #26261E;
    }

    .input {
        border: none;
        outline: none;
        padding: 10px 12px;
    }

    .input:focus {
        border: none;
        outline: none;
    }

    .para {
        text-align: center;
        padding: 20px;
    }

    .link {
        text-decoration: none;
        color: #420039
    }

    .btnContainer {
        text-align: center;
        margin-top: 10px;
        margin-bottom: 15px;
    }
    .btn {
        max-width: fit-content;
        padding: 8px 12px;
        border: none;
        background-color: #26261E;
        color: white;
        font-weight: 600;
        border-radius: 4px;
        cursor: pointer;
        letter-spacing: 0.6px;
    }

    .inputFields {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 4px
    }

    .label {

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