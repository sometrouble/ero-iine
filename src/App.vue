<template lang="pug">
  v-app
    v-navigation-drawer(v-model="drawer" fixed temporary)
      v-list
        v-list-tile(v-for="(item, i) in items" :key="i" :href="item.url")
          v-list-tile-action
            v-icon(v-html="item.icon" small)
          v-list-tile-content
            v-list-tile-title(v-text="item.title")

    v-toolbar(app fixed clipped-left)
      v-toolbar-side-icon(@click.stop="drawer = !drawer")
      div(style="width: 150px")
        v-img(:src="require('./assets/images/ero-iine.png')" contain height="60%")
      v-spacer
      v-btn(flat to="gallery")
        span.mr-2 latest Ero-iine(Beta)
        v-icon fas fa-external-link-alt
      v-btn(small flat icon @click="tweet")
        v-icon fab fa-twitter
    v-content
      p.caption.grey--text.ma-3 version: {{ version }}
      router-view
    v-footer.justify-center
      p.caption.mt-3 ©2018-2019 Sexual Favorite Research Society of Japan.
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      drawer: false,
      version: "0.0.4-alpha",
      items: [
        {
          icon: "fas fa-home",
          title: "Top",
          url: "/ero-iine/"
        },
        {
          icon: "fab fa-readme",
          title: "About",
          url: "/ero-iine/#/about"
        },
        {
          icon: "fas fa-heart",
          title: "Gallery",
          url: "/ero-iine/#/gallery"
        },
        {
          icon: "fas fa-address-book",
          title: "Contact",
          url: "/ero-iine/#/contact"
        },
      ],
    }
  },
  methods: {
    tweet() {
      let EUC = encodeURIComponent;
      let LINK = window.location.href;
      let message = "エロいいね研究会 - Sexual Favorite Research Society of Japan."
      let hashtag = "エロいいね研究会, SFRS_jp"

      let URL = `https://twitter.com/intent/tweet?text=${EUC(message)}&hashtags=${EUC(hashtag)}&url=${LINK}`

      if (navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
          location.href = URL
      }else{
          window.open(URL, "_blank","top=50,left=50,width=500,height=500,scrollbars=1,location=0,menubar=0,toolbar=0,status=1,directories=0,resizable=1");
      }
    },
  }
}
</script>
