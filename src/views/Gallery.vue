<template lang="pug">
  v-container
    v-layout.mt-5(text-xs-center wrap)
      v-flex(xs12)
        v-img.mb-3(:src="require('../assets/images/ero-iine(large).png')" contain height="5vh")
      v-flex(xs12)
        v-btn(v-if="eroiine.length>0" outline @click="reload_eroiine") reload
        hr
      v-flex(v-for="(i, index) in eroiine" :key="index" xl4 lg6 md6 xs12 wrap)
        v-card.ma-1(style="height: 100%;" color="pink lighten-4")
          v-layout(wrap)
            v-flex(lg6)
              blockquote.twitter-tweet(width="300" height="300")
                a(:href="i[0]")
            v-flex(lg6)
              div.mr-3.ml-3(v-for="(t, tindex) in i[3].split(',')")
                v-chip(v-if="t" @input="remove_tag(index,t)" small color="primary" close label outline style="width:100%;")
                  v-icon(left) label
                  | {{ t }}
              v-dialog(max-width="600px")
                v-btn(slot="activator" fab small color="pink" outline)
                  v-icon(dark) add
                v-card
                  v-form(ref="form" v-model="valid")
                    v-card-title
                      span.caption new tag
                    v-card-text
                      v-text-field(label="tag name" v-model="formdata.tag" required :rules="[v => !!v || 'required field']")
                    v-card-actions
                      v-spacer
                      v-btn(:disabled="!valid" color="primary" @click="add_tag(index)") Add tag
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        eroiine: [],
        components: {
        },
        //tag: [
        //  'タグ機能は',
        //  '未実装です',
        //  'エロいいね研究会を',
        //  'よろしくお願いいたします',
        //],
        valid: true,
        formdata: {
          tag: '',
        }
      }
    },
    methods: {
      async initialize() {
        await this.update_eroiine();
        setTimeout(() => {
          this.reload_eroiine();
        }, 5000);
      },
      reload_eroiine() {
        window.twttr.widgets.load();
      },
      update_eroiine() {
        axios.get('https://script.google.com/macros/s/AKfycbxaaMlZxtrSBDJNxFwv6TJbhV32U7pa39p_4sjjRhS69HHXKFPu/exec')
          .then((response) => {
            let temp = response.data.data;
            this.eroiine = temp.reverse().slice(0,30);
          });
      },
      add_tag(index) {
        let newtag = this.eroiine[index][3] + "," + this.formdata.tag

        var params = new URLSearchParams();
        params.append('action', "add");
        params.append('url', this.eroiine[index][0]);
        params.append('tag', newtag);

        axios.post('https://script.google.com/macros/s/AKfycbz0D8DfjgGYiTAs1bED1wBstFRvuUP6wfbuEJ42Ed74uLEKiYk/exec', params)
          .then((response) => {});

        this.eroiine[index][3] = newtag;
        this.formdata.tag = '';
      },
      remove_tag(index, tagname) {
        var params = new URLSearchParams();
        params.append('action', "remove");
        params.append('url', this.eroiine[index][0]);
        params.append('tag', tagname);

        axios.post('https://script.google.com/macros/s/AKfycbz0D8DfjgGYiTAs1bED1wBstFRvuUP6wfbuEJ42Ed74uLEKiYk/exec', params)
          .then((response) => {
            let newtag = response.data.newtag;
            this.eroiine[index][3] = newtag;
          });
      }
    },
    mounted() {
      this.initialize();
    }
  }
</script>