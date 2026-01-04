<template>
    <div class="login-view-wrapper">
        <div class="login-view-content">
            <h3>Login Form</h3>
            <form action="" class="login-form">

            </form>
        </div>
    </div>
</template>

<script></script>

<style scoped>
.login-view-wrapper {
    width: 100%;
    display: flex;
}

.login-view-content {
    margin: auto;
    border-radius: var(--border-radius-standard);
    margin-top: 10vh;
}

@media (max-width: 767px) {
    .login-view-wrapper {
        padding: 20px;
    }
}
</style>