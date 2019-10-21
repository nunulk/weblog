<template>
  <section class="section">
    <div v-if="isDraft" class="notification is-warning">
      Draft
    </div>
    <h2 class="title">{{ post.title }}</h2>
    <div v-html="post.content" />
  </section>
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
      console.log('post', { route, params })
      const isDraft = !!route.query.draftKey
      const url = isDraft ? `weblogs/${params.id}?draftKey=${route.query.draftKey}` : `weblogs/${params.id}`
      const response = await $axios.$get(url, { baseURL: env.BASE_URL, headers: { 'X-API-KEY': env.API_KEY } })
      console.log('post', { response })
      return { post: response, isDraft }
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
