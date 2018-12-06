<template lang="pug">
  v-container
    v-layout.mt-5(text-xs-center wrap)
      v-flex(xs12)
        v-img(:src="require('../assets/images/ero-iine(large).png')" contain height="30vh")
      v-flex.mb-4.mt-3
        p.subheading.font-weight-regular
          | For help and collaboration with other Ero-iine researchers,
          | please join our online
          |#[a(href="https://discord.gg/26uyN3y" target="_blank") Discord Community]
          v-btn(flat icon :color="ero_iine_color" @click="toggle_color")
            i.fas.fa-heart

      v-flex.mb-5(xs12 v-for="(content, key) in contents" :key="key")
        h2.headline.font-weight-bold.mb-3 {{ key }}
        v-layout(justify-center v-for="(line, key, index) in content.text" :key="index")
          p {{ line }}
        v-btn(outline :color="content.btn_color" large) {{ content.btn_text }}
        //.
          <iframe src="https://discordapp.com/widget?id=520133763037134888&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0"></iframe>
</template>

<script>
  import { Tweet } from 'vue-tweet-embed'

  export default {
    data: () => ({
      components: [
          Tweet
      ],
      ero_iine_color: "grey",
      contents: {
        About: {
          text: [
            "エロいいね研究会は初心者歓迎！",
            "誰でも簡単にエロいいねを始めることができます✨"
          ],
          url: "",
          btn_text: "learn more",
          btn_color: "indigo",
        }
      },
    }),
    methods: {
      toggle_color() {
        this.ero_iine_color == "pink" ? this.ero_iine_color = "grey" : this.ero_iine_color = "pink"
      }
    }
  }
</script>

<style>

</style>
