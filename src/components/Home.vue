<template>
   <div>
   <div v-if="loading">loading...</div>
    <b-card-group columns>
      <b-card v-for="n in news" title="" :key="n.url"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2">
        <p class="card-text">
           <router-link :to="{ name: 'NewsView', params: {title:n.title, content:n.content, url:n.url, datePublished:n.datePublished}}">
                   {{n.title}}
            </router-link>
        </p>
      </b-card>
    </b-card-group>
   </div>
</template>

<script>
export default {
  created(){
    this.fetchData(this.$route.params.site)
  },
  name: 'home',
  data () {
    return {
      loading: false,
      site:[],
      news:[],
      url: null,
      error: null
    }
  },
  methods:{
    fetchData(site){
      this.url='/api/site/'+site+'/news'
      this.news ='';
      this.loading=true;
      this.axios
        .get(this.url)
        .then(response => {
          this.news = response.data;
          this.loading=false;
          })
        .catch(error => (console.log("error " + error)));
    },
  },
  watch: {
      $route: function (newRoute, oldRoute) {
        this.fetchData(this.$route.params.site)
      }
    }
}
</script>
