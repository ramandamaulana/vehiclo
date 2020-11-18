<template>
  <div class="Login">
    <RegisterAccount />
  </div>
</template>
<script>
// @ is an alias to /src
import RegisterAccount from "@/components/RegisterAccount.vue";

export default {
  name: "Home",
  components: {
    RegisterAccount,
  },
};
</script>
