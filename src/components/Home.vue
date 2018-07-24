<template>
   <div>
     <h1>teste</h1>
     <b-card-group columns>
  <b-card v-for="n in news" title="" :key="n.url"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2">
    <p class="card-text">
      {{n.title}}.
    </p>
    
  </b-card>
   </b-card-group>
   </div>
</template>

<script>
export default {
  mounted() {
    this.load()
  },
  beforeRouteEnter (to, from, next) {
   load()
  },
  // when route changes and this component is already rendered,
  // the logic will be slightly different.
  beforeRouteUpdate (to, from, next) {
   load()
  },
  name: 'home',
  data () {
    return {
      site:[],
      news:[]
    }
  },
  methods:{
    load(){
      console.log(this.$route.params.obj)

    },
    loadNews(site){      
      this.axios
                .get('/api/site/'+site+'/news')
                .then(response => {
                    this.news = response.data;
                    console.log(this.site);
                })
                .catch(error => (console.log("error " + error)));

    },
    
  },
 
}
</script>

