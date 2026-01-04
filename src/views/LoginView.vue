<template>
    <div class="login-view-wrapper">
        <div class="login-view-content">
            <h3>Login Form</h3>
            <LoginButtons />
            <form action="" class="login-form">
                <div class="login-form-subgroup">
                    <label class="simple-label">Username</label>
                    <input class="simple-input" type="text">
                </div>
                <div class="login-form-subgroup">
                    <label class="simple-label">Password</label>
                    <input class="simple-input" type="text">
                </div>
                <div class="action-button-wrapper">
                    <button class="simple-button">Sign in</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import LoginButtons from '@/components/LoginButtons.vue';

export default {
    components: {
        LoginButtons
    }
}
</script>

<style scoped>
.login-view-wrapper {
    width: 100%;
    display: flex;
    background-color: var(--bg-app);
    height: 100vh;
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
    max-width: 420px;
}

.login-form {
    display: flex;
    flex-direction: column;
    gap: 10px;
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

@media (max-width: 767px) {
    .login-view-wrapper {
        padding: 20px;
    }

    .login-view-content {
        max-width: none;
        width: 100%;
    }
}

@media (max-width: 1023px) {
    .login-view-content {
        max-width: 420px;
        width: 100%;
    }
}
</style>