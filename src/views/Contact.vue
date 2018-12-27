<template lang="pug">
  v-container(fluid)
    v-layout.mt-5(text-xs-center wrap)
      v-flex(xs12)
        v-img.mb-3(:src="require('../assets/images/ero-iine(large).png')" contain height="10vh")
        hr

      v-flex.mt-5.mb-5(xs12)
        p.headline.font-weight-bold.md-4 Researcher
        p.body-1 エロいいね研究会は、日本中から選抜された優秀な研究者達によって構成されています。
        p.body-1 そのうちの数名について、ここで紹介させていただきます。

        v-layout.mt-4(align-center justify-center column)
          v-flex(xs6 v-for="researcher in researchers")
            v-card.ma-2.pa-4(width="400")
              v-layout(row)
                v-flex(xs4)
                  v-avatar(size="100px")
                    img(:src="researcher.icon" icon)
                v-flex(xs8)
                  p.title.font-weight-bold {{ researcher.name }}
                  p.caption.grey--text {{ researcher.position }}
                  v-flex
                    v-btn(small outline color="light-blue" :href="researcher.twitter") twitter
                    v-btn(small outline color="black" :href="researcher.web") website
              v-flex.mt-2(xs12)
                p {{ researcher.comment }}

        v-btn(color="primary" href="https://discord.gg/26uyN3y") Join Discord

</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        researchers: [
          {
            name: "NYLON_1919",
            icon: "https://pbs.twimg.com/profile_images/1056830832696913921/Nb7RSlBD_400x400.jpg",
            twitter: "https://twitter.com/NYLON_1919",
            web: "https://himawarifurutani1919.hatenablog.com",
            position: "研究会会長",
            comment: ""
          },
          {
            name: "Ryusk",
            icon: "https://pbs.twimg.com/profile_images/378800000371011441/cd8141e485a5359b9a3adacb4be597c9_400x400.png",
            twitter: "https://twitter.com/ryuks1228",
            web: "https://filmarks.com/users/ryuks1228",
            position: "名誉研究会長",
            comment: ""
          },
          {
            name: "Trouble_SUM",
            icon: "https://pbs.twimg.com/profile_images/1075024731366031361/9KGXAp7l_400x400.jpg",
            twitter: "https://twitter.com/sometrouble_",
            web: "https://sometrouble.hatenablog.com/",
            position: "研究員",
            comment: "主に技術的な面でのサポートを行っています。"
          },
        ]
      }
    },
    methods: {
      submit() {
      }
    },
    mounted() {
    }
  }
</script>