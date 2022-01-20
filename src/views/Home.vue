<template>
  <div class="home">
    <div class="text-center">
      <h1>Welcome User</h1>
      <h2>Please Login Or Register</h2>
    </div>
    <div class="text-center">
      <RouterLink to="/auth/login">
        <button class="btn btn-primary m-2">Login</button>
      </RouterLink>
      or
      <RouterLink to="/auth/register"
        ><button class="btn btn-primary m-2">Register</button>
      </RouterLink>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>
