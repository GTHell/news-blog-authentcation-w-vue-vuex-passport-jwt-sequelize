<template>

<div>
  <v-container>
    <v-layout>
      <v-flex xs12>
        <h1>Posts</h1>
      </v-flex>
    </v-layout>
    <v-layout>
    </v-layout>
  </v-container>
</div>
    <!-- <div v-for="post in posts">
      <p>
        <span><b>{{ post.title }}</b></span><br />
        <span>{{ post.description }}</span>
      </p>
    </div> -->
</template>

<script>
import PostsService from "@/services/PostsService";
export default {
  name: "posts",
  data() {
    return {
      posts: []
    };
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    async getPosts() {
      const response = await PostsService.fetchPosts();
      this.posts = response.data;
    }
  }
};
</script>
