<template>
  <section class="section">
    <h2 class="title is-3 has-text-grey">
      "Just start  <b-icon
        icon="rocket"
        size="is-large"
      />"
    </h2>
    <h3 class="subtitle is-6 has-text-grey">
      Author: <a href="https://github.com/anteriovieira">
        Antério Vieira
      </a>
    </h3>
    <ul>
      <li v-for="page in pages" :key="page.id">
        <div class="card">
          <div class="card-header">
            {{ page.title }}
          </div>
          <div class="card-content" v-html="page.content">
            {{ page.content }}
          </div>
          <div class="card-footer">
            {{ page.createdAt }}
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
      return { pages: response.contents }
    } catch (e) {
      return { pages: [] }
    }
  }
}
</script>
