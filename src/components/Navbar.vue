<template>
    <div class="navbar-view-wrapper">
        <div class="navbar-view-content">
            Navbar
        </div>
    </div>
</template>

<script></script>

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
}

@media (max-width: 480px) {
    .navbar-view-wrapper {
        padding: 20px;
    }
}

@media (max-width: 768px) {
    .navbar-view-wrapper {
        padding: 10px;
    }
}
</style>