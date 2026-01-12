<template>
    <div class="login-view-wrapper">
        <div class="login-view-content">
            <h3 class="h3-header">Login Form</h3>
            <LoginButtons />
            <form action="" class="login-form" @submit.prevent="handleLogin">
                <div class="login-form-subgroup">
                    <label class="simple-label">Username</label>
                    <input class="simple-input" type="text" placeholder="Enter your username (required)" v-model="form.username">
                </div>
                <div class="login-form-subgroup">
                    <label class="simple-label">Password</label>
                    <input class="simple-input" type="text" placeholder="Enter your password (required)" v-model="form.password">
                </div>
                <div class="forgot-password-div"><span @click="handlePasswordForgotten"
                        class="forgot-password-span">Forgot password?</span></div>
                <div class="action-button-wrapper">
                    <button class="simple-button login-button" type="text">Sign in</button>
                </div>
                <div class="error-message-div">{{ error }}</div>
            </form>
        </div>
    </div>
</template>

<script>
import LoginButtons from '@/components/LoginButtons.vue';

export default {
    data() {
        return {
            form: {
                username: null,
                password: null,
            },
            error: null,
        }
    },
    components: {
        LoginButtons
    },
    methods: {
        checkInput() {

        },
        async handleLogin() {
            this.checkInput()
            this.error = null
        }
    }
}
</script>

<style scoped>
.login-view-wrapper {
    width: 100%;
    display: flex;
    background-color: var(--bg-app);
    height: 100vh;
    padding: 20px;
}

.login-view-content {
    margin: auto;
    border-radius: var(--border-radius-standard);
    margin-top: 10vh;
    padding: var(--padding-standard);
    box-shadow: var(--shadow-sm);
    background-color: white;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
}

.h3-header {
    width: 100%;
    text-align: center;
}

.login-form {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.forgot-password-div {
    width: 100%;
    text-align: center;
    font-size: 0.9rem;
}

.forgot-password-span {
    cursor: pointer;
}

.forgot-password-span:hover {
    text-decoration: underline;
}

.login-form-subgroup {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.action-button-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
}

.login-button {
    width: 100%;
}

.error-message-div {
    width: 100%;
    font-size: 0.9rem;
}

@media (max-width: 767px) {
    .login-button {
        width: 100%;
    }
}

@media (max-width: 1023px) {
    .login-view-content {
        width: 420px;
    }
}

@media (min-width: 1024px) {
    .login-view-content {
        width: 480px;
    }
}
</style>