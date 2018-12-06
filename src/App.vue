<template lang="pug">
  v-app
    v-navigation-drawer(v-model="drawer" fixed app)
      v-list
        v-list-tile(value="true" v-for="(item, i) in items" :key="i")
          v-list-tile-action
            v-icon(v-html="item.icon")
          v-list-tile-content
            v-list-tile-title(v-text="item.title")

    v-toolbar(app fixed clipped-left)
      v-toolbar-side-icon(@click.stop="drawer = !drawer")
      div(style="width: 150px")
        v-img(:src="require('./assets/images/ero-iine.png')" contain height="60%")
      v-spacer
      v-btn(flat href="https://twitter.com/NYLON_1919/likes" target="_blank")
        span.mr-2 latest Ero-iine
        v-icon fas fa-external-link-alt
    v-content
      router-view
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      drawer: "",
    }
  }
}
</script>
