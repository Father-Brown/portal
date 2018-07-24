import Site from './components/Sites.vue'


const GlobalComponents = {
    install(Vue) {
        Vue.component('fb-sites', Site)
       
    }
}
export default GlobalComponents
