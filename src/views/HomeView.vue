<template>
    <div class="home-view-wrapper">
        <div class="home-view-content">
            <h1>Home View</h1>
            <button @click="check" class="simple-button">Check health</button>
            <div>{{ response }}</div>
        </div>
    </div>

</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            response: null
        }
    },
    methods: {
        async check() {
            const response = await axios.get('/health');
            this.response = response
            console.log(response)
        }
    }
}
</script>

<style scoped>
.home-view-wrapper {
    width: 100%;
    display: flex;
    height: 100%;
}

.home-view-content {
    width: 100%;
    max-width: var(--main-width);
    margin: 0 auto;
}

.simple-button {
    border: none;
    padding: var(--simple-button-padding);
    border-radius: var(--border-radius-standard);
    cursor: pointer;
}

@media (max-width: 767px) {
    .home-view-wrapper {
        padding: 20px;
    }
}

@media (max-width: 1023px) {
    .home-view-wrapper {
        padding: 10px;
    }
}
</style>