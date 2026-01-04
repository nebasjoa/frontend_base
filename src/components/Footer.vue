<template>
    <div class="footer-view-wrapper">
        <div class="footer-view-content">
            <h3>Footer</h3>
            <div>
                <ul>
                    <li>ok</li>
                    <li>ok</li>
                    <li>ok</li>
                    <li>ok</li>
                </ul>
            </div>
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
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}

@media (max-width: 767px) {
    .footer-view-wrapper {
        padding: 20px;
    }
}

@media (max-width: 1023px) {
    .footer-view-wrapper {
        padding: 10px;
    }
}
</style>