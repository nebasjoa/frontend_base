<template>
  <div class="layout-wrapper">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  data() {
    return {
      
    }
  },
  components: { Navbar, Footer }
}
</script>

<style scoped>
.layout-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
}
</style>