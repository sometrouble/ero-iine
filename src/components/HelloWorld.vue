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
            p {{ ero_iine_num }}

      v-flex.mb-5(xs12 v-for="(content, key) in contents" :key="key")
        h2.headline.font-weight-bold.mb-3 {{ key }}
        v-layout(justify-center v-for="(line, key, index) in content.text" :key="index")
          p {{ line }}
        v-btn(outline :color="content.btn_color" large :to="content.url") {{ content.btn_text }}
</template>

<script>
  import axios from 'axios'
  //import { Tweet } from 'vue-tweet-embed'

  export default {
    data: () => ({
      components: [
          //Tweet
      ],
      ero_iine_color: "grey",
      ero_iine_num: 0,
      contents: {
        About: {
          text: [
            "エロいいね研究会は初心者歓迎！",
            "誰でも簡単にエロいいねを始めることができます✨"
          ],
          url: "/about",
          btn_text: "learn more",
          btn_color: "indigo",
        }
      },
    }),
    methods: {
      toggle_color() {
        if(this.ero_iine_color == "pink") {
          this.ero_iine_color = "grey"
        } else {
          this.ero_iine_color = "pink";
          axios.post('https://script.google.com/macros/s/AKfycbwEf0jiuCUTOxCym_pEE2EFNQwtIXqoiWYCOsixyRPbnBSGvdLg/exec')
            .then(function(response) {
              this.ero_iine_num = response.data.iine_num;
            }.bind(this))
        }
      }
    },
    mounted() {
      axios.get('https://script.google.com/macros/s/AKfycbwEf0jiuCUTOxCym_pEE2EFNQwtIXqoiWYCOsixyRPbnBSGvdLg/exec')
        .then(function(response) {
          this.ero_iine_num = response.data.iine_num;
        }.bind(this))
    }
  }
</script>

<style>

</style>
