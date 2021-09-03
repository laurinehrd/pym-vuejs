<template>
  <div id="app">
    <router-view/>
    <btn-add-new/>
    <category-item v-for="c, idx in categories" :key="idx" :category="c"/>
  </div>
</template>

<script>
import BtnAddNew from './components/BtnAddNew.vue'
import CategoryItem from './components/CategoryItem.vue'
export default {
  components: { CategoryItem, BtnAddNew },
  name: 'App',
  async mounted () {
    fetch('http://localhost:8741/api/categories').then((response) => {
      this.categories = response.json().then(json => {
        this.categories = json['hydra:member']
      })
    })
  },
  data () {
    return {
      categories: []
    }
  }
}
</script>

<style>

#app {
  font-family: 'Gilroy', 'Roboto', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #000000;
  margin-top: 60px;
}
</style>
