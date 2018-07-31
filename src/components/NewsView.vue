<template>
    <div>
      <h1>{{ title }}</h1>
      <h3>{{ subTitle }}</h3>
      <div>
        {{ url }}
        <br/>
        <br/>
        Data de publicação: {{ datePublished }}
        <br/>
        <br/>
        {{ content }}
      </div>
    </div>
</template>
<script>
export default {
  created() {
  this.fetchData()
  },
  name: 'home',
  data () {
    return {
      title:'',
      subTitle:'',
      content:'',
      url:'',
      datePublished:''
    }
  },
  methods:{
    fetchData(){
      this.title = this.$route.params.title
      this.content = this.$route.params.content
      this.url = this.$route.params.url
      this.subTitle = this.$route.params.subTitle
      this.datePublished = this.$route.params.datePublished
    }
  }
}
</script>