<template>
    <div class="navbar-view-wrapper">
        <div class="navbar-view-content">
            <div>App name</div>
            <div class="navbar-action-buttons">
            <button @click="routeTo('Login')" class="simple-button">Login</button>
            <button @click="routeTo('Registration')" class="simple-button">Register</button>
        </div>
        </div>
        
    </div>
</template>

<script>
export default {
    methods: {
        routeTo(name) {
            this.$router.push({ name: name })
        }
    }
}
</script>

<style scoped>
.navbar-view-wrapper {
    width: 100%;
    display: flex;
    background-color: var(--primary-color);
}

.navbar-view-content {
    margin: auto;
    max-width: var(--main-width);
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.simple-button {
    border: none;
    padding: var(--simple-button-padding);
    border-radius: var(--border-radius-standard);
    cursor: pointer;
}

.navbar-action-buttons {
    display: flex;
    gap: 10px;
}

@media (max-width: 767px) {
    .navbar-view-wrapper {
        padding: 20px;
    }
}

@media (max-width: 1023px) {
    .navbar-view-wrapper {
        padding: 10px;
    }
}
</style>