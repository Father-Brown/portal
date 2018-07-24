<template>
  <div id="app">

  <b-container fluid>
    <b-row>
     <b-navbar toggleable type="light" variant="light">
        <b-navbar-toggle target="nav_text_collapse"></b-navbar-toggle>
        <b-navbar-brand>Father Brown</b-navbar-brand>
        <b-collapse is-nav id="nav_text_collapse">
            <b-navbar-nav>
                <b-nav-text></b-nav-text>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
    </b-row>
    <b-row>
        <b-col cols="2">
        <fb-sites/>
        </b-col>
        <b-col cols="10">
          <router-view></router-view>
        </b-col>
    </b-row>
</b-container>
    
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
</style>
