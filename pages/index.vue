<template>
  <section class="section">
    <h2 class="title is-3 has-text-grey">
      Posts
    </h2>
    <ul class="posts">
      <li v-for="post in posts" :key="post.id">
        <div class="card">
          <div class="card-header">
            <div class="card-header-title">
              {{ post.title }}
            </div>
          </div>
          <div class="card-content">
            <div v-if="post.mainImage && post.mainImage.url">
              <img :src="`${post.mainImage.url}?fit=fill&fill-color=fff&w=200&h=100`">
            </div>
            <div v-html="post.content"/>
          </div>
          <div class="card-footer">
            <div class="card-footer-item is-12 is-size-7 has-text-grey-light has-text-right">
              posted at {{ post.createdAt|formatDate }}
            </div>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  async asyncData ({ env, $axios }) {
    try {
      const response = await $axios.$get('weblogs', { baseURL: env.BASE_URL, headers: { 'X-API-KEY': env.API_KEY } })
      return { posts: response.contents }
    } catch (e) {
      return { posts: [] }
    }
  }
}
</script>

<style lang="scss" scoped>
.posts > li {
  margin-bottom: 1em;
}
</style>
