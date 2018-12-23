<template lang="pug">
  v-container
    v-layout.mt-5(text-xs-center wrap)
      v-flex(xs12)
        v-img.mb-3(:src="require('../assets/images/ero-iine(large).png')" contain height="5vh")
        hr
      v-flex(v-for="(i, index) in eroiine.reverse().slice(1,10)" :key="index" xs4)
        v-card(style="height: 100%;")
          blockquote.twitter-tweet
            a(:href="i[0]")
          v-chip(small color="primary" close label outline) 
            v-icon(left) label
            |ero-iine
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        eroiine: [],
        components: {
        },
      }
    },
    methods: {
      submit() {
      },
    },
    async mounted() {
      await axios.get('https://script.google.com/macros/s/AKfycbxaaMlZxtrSBDJNxFwv6TJbhV32U7pa39p_4sjjRhS69HHXKFPu/exec')
        .then((response) => {
          this.eroiine = response.data.data;
        });
      window.twttr.widgets.load();
    }
  }
</script>