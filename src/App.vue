<template>
  <div id="app">
    <!-- <button class="btn btn-primary" @click="loginUser">Click me</button> -->
    <!-- <button class="btn btn-primary" @click="loginUserData">Click me</button> -->
    <Navbar />

    <RouterView />
    <pre>{{ user }}</pre>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import Navbar from "@/components/AppNav";

export default {
  components: {
    Navbar,
  },
  computed: {
    ...mapGetters({
      user: "Auth/user",
    }),
  },
  methods: {
    ...mapActions({
      loginUserLocal: "Auth/loginUser",
      initApp: "Auth/initAuth",
    }),
    loginUser() {
      // this.loginUserLocal({ username: "Hello", password: "12345478", age: 23 });
      // Axios.post(this.loginUserLocal);
    },
  },
  created() {
    this.initApp();
  },
};
</script>
<style lang="scss"></style>
