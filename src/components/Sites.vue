<template>
    <b-list-group>
        <b-list-group-item v-for="s in site" :key="s.name">
            <router-link class="btn btn-simple btn-warning btn-xs btn-icon edit" :to="{ name: 'Home', params: {site:s.name}}">
                   {{s.name}}
            </router-link>

        </b-list-group-item> 
    </b-list-group>
</template>

<script>
export default {
  created() {
    this.load()
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
      this.axios
        .get('/api/allSite')
        .then(response => {
          this.site = response.data;
          })
        .catch(error => (console.log("error " + error)));
    },
  },
}
</script>
