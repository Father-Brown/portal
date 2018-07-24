<template>
    
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
    //   this.axios
    //             .get('/api/allSite')
    //             .then(response => {
    //                 this.site = response.data;
    //                 console.log(this.site);
    //             })
    //             .catch(error => (console.log("error " + error)));

    }
  }
}
</script>