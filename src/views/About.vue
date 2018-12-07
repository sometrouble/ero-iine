<template lang="pug">
  v-container
    v-layout.mt-5(text-xs-center wrap)
      v-flex(xs12)
        v-img.mb-3(:src="require('../assets/images/ero-iine(large).png')" contain height="10vh")
        hr
        .mt-4
          <blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">エロいいね研究会の公式アカウントです！タイムラインを見ててこの絵エッチだな〜エロいな〜って経験はありませんか？😃<br>我々エロいいね研究会はあなたのタイムラインのエッチな絵エロい絵のさらなる発展を願うと共にお互いに新たなエロい絵を見つけるべく切磋琢磨する関係にあります！😤</p>&mdash; エロいいね研究会 (@NYLON_1919) <a href="https://twitter.com/NYLON_1919/status/981104880663150592?ref_src=twsrc%5Etfw">2018年4月3日</a></blockquote>

      v-flex.mt-5.mb-5(xs12 v-for="(content, key) in contents" :key="key")
        h2.headline.font-weight-bold.mb-3 {{ key }}
        v-layout(v-if="content.text" justify-center v-for="(line, key, index) in content.text" :key="index")
          p {{ line }}
        v-layout(v-if="content.links" justify-center v-for="(line, key, index) in content.links" :key="index")
          a.mb-3(:href="line[1]") {{ line[0] }}
        v-btn(v-if="content.btn_color!= ''" outline :color="content.btn_color" large :disabled="content.disabled" style="width:150px;" :href="content.url") {{ content.btn_text }}
</template>

<script>
  //import axios from 'axios'
  //import Tweet from 'vue-tweet-embed'

  export default {
    data() {
      return {
        components: {
        },
        contents: {
          "What's Ero-iine?": {
            text: [
              "エロいいねとは…"
            ],
            url: "https://twitter.com/NYLON_1919/status/1039728529796198401",
            btn_text: "learn more",
            btn_color: "indigo",
            disabled: false
          },
          "Research": {
            links: [
              ["2018-10-16 NYLON_1919: エロいいね危機（sexual faborite shock）" ,"https://himawarifurutani1919.hatenablog.com/entry/2018/10/16/021509"],
              ["2018-08-16 NYLON_1919: エロいいねのやり方（発展編）", "https://himawarifurutani1919.hatenablog.com/entry/2018/08/16/024325"],
              ["2018-08-14 NYLON_1919: エロいいねのやり方", "https://himawarifurutani1919.hatenablog.com/entry/2018/08/14/003441"]
            ],
            url: "https://himawarifurutani1919.hatenablog.com/",
            btn_text: "learn more",
            btn_color: "pink",
            disabled: false
          },
          "Workshop, Symposium": {
            text: [
              "現在, 開催予定はありません。"
            ],
            url: "",
            btn_text: "entry",
            btn_color: "indigo",
            disabled: true
          },
          "Registration": {
            text: [
              "現在, 登録の受付を行っておりません。"
            ],
            url: "",
            btn_text: "register",
            btn_color: "indigo",
            disabled: true
          },
        },
      }
    },
    methods: {
    },
    mounted() {
    }
  }
</script>