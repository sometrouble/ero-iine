<template lang="pug">
  v-container
    v-layout.mt-5(text-xs-center wrap)
      v-flex(xs12)
        v-img.mb-3(:src="require('../assets/images/ero-iine(large).png')" contain height="5vh")
        hr
      v-flex(v-for="(item, index) in eroiine" :key="index" md3)
        blockquote.twitter-tweet 
          a(:href="item[0][0]")

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
    mounted() {
      axios.get('https://script.google.com/macros/s/AKfycbxaaMlZxtrSBDJNxFwv6TJbhV32U7pa39p_4sjjRhS69HHXKFPu/exec')
        .then(function(response) {
          this.eroiine = response.data.data;
        }.bind(this));
    }
  }
</script>