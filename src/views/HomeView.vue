<template>
    <h1>Home View</h1>
    <button @click="check">Check health</button>
    <div>{{ response }}</div>
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
</style>