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

<style>
.layout-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
}

.simple-button {
    border: none;
    padding: var(--simple-button-padding);
    border-radius: var(--border-radius-standard);
    cursor: pointer;
    font-size: 0.9rem;
}

.simple-input {
    border: 1px solid;
    border-radius: var(--border-radius-standard);
    border-color: var(--border-strong);
    padding: var(--padding-middle);
}

.simple-label {
    font-size: 14px;
}
</style>