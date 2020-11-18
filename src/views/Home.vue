<template>
  <div class="home">
    <Navbar />
    <Konten />
    <Footer />
  </div>
</template>
<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Konten from "@/components/Konten.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Konten,
    Footer,
  },
};
</script>
