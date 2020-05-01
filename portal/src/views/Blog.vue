<template>
  <div class="blog">
    <h1>Blog/Extensive notepad</h1>
    <div class="container">
      <div class="col__1-2">
        <p>
          Future section that I plan to fill with my thoughts about things that
          caught my interest. Not limited by development I'll be writing on any
          subject that interests me, from coffee to miniature painting,
          literature and travels.
        </p>
        <p>
          In part I wish to keep track of all my fancies, and in part to share
          them with others and spark a discussion.
        </p>
      </div>
    </div>
    <div class="container">
      <div class="col__2-3">
        <template v-for="item in blogs">
          <BlogItem :content="item" :icon="'pencil'" :key="item.id" />
        </template>
      </div>
      <div class="col__1-3">
        <div class="blog__sidePanel">
          <ul class="blog__list">
            <template v-for="item in blogs">
              <li :key="item.id">{{ item.title }}</li>
            </template>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogItem from "../components/BlogItem.vue";
import data from "../assets/blog.json";

export default {
  name: "blog",
  data() {
    return {
      blogs: data.entries
    };
  },
  components: {
    BlogItem
  },
};
</script>

<style lang="scss">
.blog {
  $theme: $purple;
  a {
    color: $theme;

    &:hover {
      color: lighten($theme, 15%);
    }
  }

  .blog__list {
    padding: 0;
    margin: 0;
    list-style-type: none;
    li {
      background-color: $bgLight;
      border: 1px solid $borderDark;
      margin: 0 0 20px 0;
      padding: 15px;
    }
  }
}
</style>
