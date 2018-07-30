<template>
    <div>
      <h1>{{ title }}</h1>
      <div>
        {{ url }}
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
      content:'',
      url:''
    }
  },
  methods:{
    fetchData(){
      this.title = this.$route.params.title
      this.content = this.$route.params.content
      this.url = this.$route.params.url
    }
  }
}
</script>