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
    margin: auto;
    margin-top: 0;
}

.home-view-content {
    width: 100%;
    max-width: var(--main-width);
    margin: 0 auto;
}

@media (max-width: 767px) {
    .home-view-wrapper {
        padding: 20px;
    }
}

@media (min-width: 768px) {
    .home-view-wrapper {
        padding: 10px;
    }
}

@media (min-width: 1024px) {
    .home-view-wrapper {
        padding: 10px;
    }
}

@media (min-width: 1280px) {
    .home-view-wrapper {
        padding: 10px;
    }
}
</style>