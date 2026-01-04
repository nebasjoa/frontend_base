<template>
    <div class="footer-view-wrapper">
        <div class="footer-view-content">
            <h3>Footer</h3>
        </div>
    </div>
</template>

<script></script>

<style scoped>
.footer-view-wrapper {
    width: 100%;
    display: flex;
    background-color: var(--primary-color);
}

.footer-view-content {
    margin: auto;
    width: 100%;
    max-width: var(--main-width);
}

@media (max-width: 480px) {
    .footer-view-wrapper {
        padding: 20px;
    }
}

@media (max-width: 768px) {
    .footer-view-wrapper {
        padding: 10px;
    }
}
</style>