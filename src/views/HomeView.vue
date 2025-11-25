<template>
    <h1>Home View</h1>
    <button @click="check">Check health</button>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {

        }
    },
    methods: {
        async check() {
            const response = await axios.get('/health');
            console.log(response)
        }
    }
}
</script>

<style scoped></style>