<template>
  <div class="container">
    <h3>Edit Post</h3>
    <div class="row">
      <div class="col-md-6 col-sm-12 mx-auto">
        <div class="card">
          <div class="card-body">
            <form @submit.prevent="updatePost">
              <div class="form-group mt-3">
                <label for="title">Title</label>
                <input
                  type="text"
                  id="title"
                  class="form-control"
                  placeholder="Title"
                  v-model="updatedPost.title"
                />
              </div>
              <div class="form-group mt-3">
                <label for="body">Body</label>
                <textarea
                  id="body"
                  type="text"
                  v-model="updatedPost.body"
                  class="form-control"
                  placeholder="Body"
                ></textarea>
              </div>
              <div class="form-group mt-3">
                <button type="submit" class="btn btn-primary">
                  Update Post {{ name }}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters({
      post: "Post/post",
    }),
  },
  data: () => ({
    name: "msn singh",
    updatedPost: {
      title: "",
      body: "",
    },
  }),
  methods: {
    ...mapActions({
      updatePostOnServer: "Post/updatePostById",
    }),
    // eslint-disable-next-line
    async updatePost() {
      console.log("THIS>UPDATED_POST", this.updatedPost);
      await this.updatePostOnServer(this.updatedPost);
      this.$router.push("/posts");
    },
  },
  created() {
    this.updatedPost = this.post;
  },
};
</script>
