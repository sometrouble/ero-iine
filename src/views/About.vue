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
        div(v-if="key == 'Research'")
          v-list.mb-3(two-line subheader dense)
            v-subheader(inset) Research papers
            v-list-tile(v-for="(record, key, index) in content.data" :key="index")
              v-flex(xs7)
                v-list-tile-title(xs6) {{ record[2] }} 
              v-flex(xs2)
                v-list-tile-sub-title(xs3) {{ record[1] }}
              v-flex(xs2)
                v-list-tile-sub-title(xs2) {{ record[0] }}
              v-flex(xs1)
                v-list-tile-action(xs1)
                  v-btn(icon ripple :href="record[3]")
                    i.fas.fa-link
        div(v-else)
          v-layout(v-if="content.text" justify-center v-for="(line, key, index) in content.text" :key="index")
            p {{ line }}
          v-layout(v-if="content.links" justify-center v-for="(line, key, index) in content.links" :key="index")
            a.mb-3(:href="line[1]") {{ line[0] }}
        div(v-if="key == 'Registration'")
          v-dialog(v-model="dialog" persistent max-width="600px")
            v-btn(slot="activator" color="primary" large style="width:150px;'") {{ content.btn_text }}
            v-card
              v-form(ref="form" v-model="valid")
                v-card-title
                  span.headline Registration
                v-card-text
                  v-container(grid-list-md)
                    v-layout(wrap)
                      v-flex(xs12 sm6 md4)
                        v-text-field(label="UserName*" required v-model="formdata.name" :rules="[v => !!v || 'required field']")
                      v-flex(xs12 sm6 md4)
                        v-text-field(label="TwitterID*" required hint="@UserID" v-model="formdata.twitterID" :rules="[v => !!v || 'required field']")
                      v-flex(xs12 sm6 md4)
                        v-text-field(label="Password*" required type="password" v-model="formdata.password" :rules="[v => !!v || 'required field']")
                  small *indicates required field
                v-card-actions
                  v-spacer
                  v-btn(color="primary" flat @click="dialog=false") close
                  v-btn(:disabled="!valid" color="primary" @click="submit") submit
        div(v-else)
          v-btn(v-if="content.btn_color!= ''" outline :color="content.btn_color" large :disabled="content.disabled" style="width:150px;" :href="content.url") {{ content.btn_text }}
        
        v-dialog(v-model="alert" max-width="300")
          v-card
            v-card-title.caption Thanks!
            v-card-text 
              p Hello! {{ res_name }}. 
              p Let's Ero-iine together!
            v-card-actions
              v-spacer
              v-btn(@click="alert = false") done
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        components: {
        },
        valid: true,
        alert: false,
        res_name: "",
        formdata: {
          name: '',
          twitterID: '',
          password: ''
        },
        dialog: false,
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
            data: "",
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
              "新規登録受付中です。(Beta)",
              "エロいいね研究会はあなたのエロいいねをお待ちしております。"
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
      submit() {
        let params = new URLSearchParams();
        params.append('name', this.formdata.name);
        params.append('twitterID', this.formdata.twitterID);
        params.append('password', this.formdata.password);

        axios.post('https://script.google.com/macros/s/AKfycby4Z5BXf9lIp79p0TwTWVM_0McGhusEDG8e45OzhcvF_ZWpdLS7/exec', params)
          .then(function(response) {
            this.dialog=false;
            this.res_name = response.data.name[0];
            this.alert=true;
          }.bind(this))
      }
    },
    mounted() {
      axios.get('https://script.google.com/macros/s/AKfycbxWF7h-K_PyLgu8ez24dITK7AK39tj0wpYUoSiJUaah6GYx9CYl/exec')
        .then(function(response) {
          this.contents.Research.data = response.data.data;
        }.bind(this));
    }
  }
</script>