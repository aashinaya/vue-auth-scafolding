<template>
  <div class="auth-login container border p-5">
    <div class="text-center border-radius-0">
      <h1>Log In</h1>
    </div>
    <form @submit.prevent="authenticateUser">
      <div class="form-group mb-3">
        <label for="exampleInputEmail1">Username</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter username"
          v-model="user.username"
        />
      </div>
      <div class="form-group mb-3">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          v-model="user.password"
        />
      </div>
      <div class="text-center">
        <button :disabled="loading" type="submit" class="btn btn-primary">
          Login
        </button>
        <div v-if="loading" class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      <div class="text-center mt-2">
        <RouterLink to="/auth/register">
          Need an account? Register Now
        </RouterLink>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data: () => ({
    user: {
      username: "",
      password: "",
    },
  }),
  computed: {
    ...mapGetters({
      loading: "Auth/authLoading",
    }),
  },
  methods: {
    ...mapActions({
      loginUser: "Auth/loginUser",
    }),
    authenticateUser() {
      this.loginUser(this.user);
    },
  },
};
</script>
<style>
.container {
  width: 600px;
  height: 500px;
}
</style>
