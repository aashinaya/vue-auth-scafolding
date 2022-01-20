<template>
  <div class="auth-register container border p-5">
    <div class="text-center border-radius-0">
      <h1>Register</h1>
    </div>
    <form>
      <div class="form-group mb-3">
        <label for="exampleInputEmail1">Username</label>
        <input
          type="text"
          class="form-control"
          placeholder="Enter username"
          v-model="user.username"
        />
      </div>
      <div class="form-group mb-3">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          class="form-control"
          placeholder="Enter Password"
          v-model="user.password"
        />
      </div>
      <div class="form-group mb-3">
        <label for="exampleInputPassword1">Email</label>
        <input
          type="email"
          class="form-control"
          placeholder="Enter email"
          v-model="user.email"
        />
      </div>
      <div class="form-group mb-3">
        <label for="exampleInputPassword1">Name</label>
        <input
          type="text"
          class="form-control"
          placeholder="Enter Name"
          v-model="user.name"
        />
      </div>
      <div class="text-center">
        <div class="text-center">
          <button
            :disabled="loading"
            @click="registerNewUser"
            class="btn btn-primary"
          >
            Register
          </button>
          <div v-if="loading" class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
      <div class="text-center mt-2">
        <RouterLink to="/auth/login">
          Already have an account? Login Now
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
      email: "",
      name: "",
    },
  }),
  computed: {
    ...mapGetters({
      loading: "Auth/authLoading",
    }),
  },
  methods: {
    ...mapActions({
      registerUser: "Auth/registerUser",
    }),
    registerNewUser() {
      this.registerUser(this.user);
    },
  },
};
</script>
