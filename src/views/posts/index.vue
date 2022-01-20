<template>
  <div class="container">
    <h1>Posts App</h1>
    <div class="row">
      <p v-if="loading">Loading....</p>
      <div class="col-md-6 col-sm-12 mb-3" v-for="post in posts" :key="post.id">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">{{ post.title }}</h4>
            <div class="card-body">
              {{ post.body }}
            </div>
          </div>
          <div class="card-footer d-flex justify-content-end">
            <button
              class="btn btn-danger btn-sm me-2"
              @click="deletePost(post.id)"
            >
              Delete
            </button>
            <button
              class="btn btn-info btn-sm"
              @click="$router.push(`/edit-post/${post.id}`)"
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  methods: {
    ...mapActions({
      getAllPosts: "Post/getPosts",
      deletePost: "Post/deletePostById",
    }),
  },
  computed: {
    ...mapGetters({
      posts: "Post/posts",
      loading: "Post/postsLoading",
    }),
  },
  created() {
    this.getAllPosts();
  },
};
</script>
