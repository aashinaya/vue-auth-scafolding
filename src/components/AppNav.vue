<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="/">Vue Auth App</RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0" v-if="!isLoggedIn">
          <li class="nav-item" v-for="link in authLink" :key="link.text">
            <RouterLink
              class="nav-link active"
              aria-current="page"
              :to="link.path"
              >{{ link.text }}</RouterLink
            >
          </li>
        </ul>
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0" v-else>
          <li class="nav-item" v-for="link in dashboardLink" :key="link.text">
            <RouterLink
              class="nav-link active"
              aria-current="page"
              :to="link.path"
              >{{ link.text }}</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({
    authLink: [
      { path: "/auth/login", text: "Login" },
      { path: "/auth/register", text: "Register" },
    ],
    dashboardLink: [{ path: "/dashboard/logout", text: "Logout" }],
  }),
  computed: {
    ...mapGetters({
      isLoggedIn: "Auth/isLoggedIn",
    }),
  },
};
</script>
