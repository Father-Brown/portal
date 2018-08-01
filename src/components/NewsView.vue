<template>
    <div>
      <h1>{{ news.title }}</h1>
      <h3>{{ news.subTitle }}</h3>
      <div>
        {{ news.url }}
        <br/>
        <br/>
        Data de publicação: {{ news.datePublished }}
        <br/>
        <br/>
        {{ news.content }}
           <br/>
        <br/>
        <a href="#"  v-on:click="classifyPositive"> Positive</a>
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
      news: {
        title:'',
        subTitle:'',
        content:'',
        url:'',
        datePublished:'',
        tipo:''
      },
      url:'',
      data:''
    }
  },
  methods:{
    fetchData(){
      this.news.title = this.$route.params.title
      this.news.content = this.$route.params.content
      this.news.url = this.$route.params.url
      this.news.subTitle = this.$route.params.subTitle
      this.news.datePublished = this.$route.params.datePublished
    },
    classifyPositive(){
      this.url='/api/classify/news'
      this.news.tipo='Fake'
      this.data=JSON.stringify({url:this.news.url, tipo:this.news.tipo})
      console.log(this.data);
      this.axios      
        .post(this.url,this.data, {
                        headers: {
                            "Content-type": "application/json"
                        }
                    }).then(response => {
                            return response.data;
                        })
                        .catch(error => {
                            this.notify('danger', 'Erro ao obter os dados !', 'ti-close')
                            console.log(error);
                        })

    },
    classifyNegative(){
      this.axios
        .post(this.url)
        .then(response => {
          this.news = response.data;
          this.loading=false;
          })
        .catch(error => (console.log("error " + error)));
    }
  }
}
</script>