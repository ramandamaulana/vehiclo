<template>
  <div class="Login">
    <Login />
  </div>
</template>
<script>
// @ is an alias to /src
import Login from "@/components/Login.vue";
// import Konten from "@/components/Konten.vue";
// import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    // Navbar,
    Login,
    // Footer,
  },
};
</script>
