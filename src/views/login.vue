<template>
  <div>
    <span>login</span>
    <!-- <iframe class="iframe" :src="url" frameborder="0"></iframe> -->
    <div v-html="html" />
  </div>
</template>

<script>

export default {
  name: 'Login',
  // props: {
  //   url: {
  //    required:  true
  //   }
  // },
  data() {
    return {
    //   url: '@/views/login.html'
      url: 'login.html',
      loading: false,
      html: ''
    }
  },
  // watch: {
  //   url (value) {
  //    this.load(value)
  //   }
  // },
  mounted() {
    this.load(this.url)
  },
  methods: {
    load(url) {
      if (url && url.length > 0) {
      // 加载中
        this.loading = true
        // let param = {
        //  accept:  'text/html, text/plain'
        // }
        // this.$http.get(url, param).then((response) => {
        //  this.loading =  false
        //  // 处理HTML显示
        //  this.html = response.data
        // }). catch (() => {
        //  this.loading =  false
        //  this.html =  '加载失败'
        // })
        this.$axios({
          url: this.url,
          method: 'get'
        // params: param
        }).then(res => {
        // console.log(res)
          this.html = res.data
        })
      }
    }
  }
}
</script>

<style scoped>

<style lang='less'>
.iframe {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    overflow-y: hidden;
}
</style>
