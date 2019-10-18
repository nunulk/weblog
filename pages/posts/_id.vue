<template>
  <div>
    <h3 class="title">{{ post.title }}</h3>
    <div v-html="post.content" />
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: this.post.title
    }
  },
  async asyncData ({ env, $axios, route, params, error }) {
    try {
      const response = await $axios.$get(`weblogs/${params.id}`, { baseURL: env.BASE_URL, headers: { 'X-API-KEY': env.API_KEY } })
      console.log('post', { route, params, response })
      return { post: response }
    } catch (e) {
      console.log('error', { e })
      if (e.response.status === 404) {
        error({ statusCode: 404, message: 'Not Found' })
      }
      return { post: {} }
    }
  }
}
</script>
