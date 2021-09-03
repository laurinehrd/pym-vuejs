<template>
  <div id="app">
    <router-view/>
    <btn-add-new/>
    <div>
      <category-item v-for="c, idx in categories" :key="idx" :category="c"/>
    </div>
    <div>
      <ingredient-item v-for="i, idx in ingredients" :key="idx" :ingredient="i"/>
    </div>
  </div>
</template>

<script>
import BtnAddNew from './components/BtnAddNew.vue'
import CategoryItem from './components/CategoryItem.vue'
import IngredientItem from './components/IngredientItem.vue'
export default {
  components: { CategoryItem, BtnAddNew, IngredientItem },
  name: 'App',
  async mounted () {
    fetch('http://localhost:8741/api/categories').then((response) => {
      this.categories = response.json().then(json => {
        this.categories = json['hydra:member']
      })
    })
    fetch('http://localhost:8741/api/ingredients').then((response) => {
      this.ingredients = response.json().then(json => {
        this.ingredients = json['hydra:member']
      })
    })
  },
  data () {
    return {
      categories: [],
      ingredients: []
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
