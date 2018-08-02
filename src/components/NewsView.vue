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
        <a href="#"  v-on:click="classifyPositive">
          <img style="width:45px; heght:45px" src="/static/ok.jpeg"/>
        </a>
        <a href="#"  v-on:click="classifyNegative">
          <img style="width:45px; heght:45px" src="/static/fake.png"/>
        </a>
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
      this.news.tipo='Original'
      this.data=JSON.stringify({url:this.news.url, tipo:this.news.tipo})      
      this.post(this.data)

    },
    classifyNegative(){
     this.news.tipo='Fake'
      this.data=JSON.stringify({url:this.news.url, tipo:this.news.tipo})      
      this.post(this.data)
    },
    post(data){
      this.url='/api/classify/news'
      this.axios      
        .post(this.url,data, {
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
    }
  }
}
</script>