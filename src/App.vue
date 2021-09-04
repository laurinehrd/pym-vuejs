<template>
  <div id="app">
    <div class="sidebar-menu">
      <div class="logo">
        <h1>Pym</h1>
      </div>
      <menu-item menu="Ingrédients"/>
      <menu-item menu="Plats"/>
      <menu-item menu="Catégories"/>
    </div>
    <div class="main">
      <category-item v-for="c, idx in categories" :key="idx" :category="c"/>
    </div>
    <!-- <router-view/> -->
    <!-- <btn-add-new/> -->
    <!-- <div>
      <category-item v-for="c, idx in categories" :key="idx" :category="c"/>
    </div>
    <div>
      <ingredient-item v-for="i, idx in ingredients" :key="idx" :ingredient="i"/>
    </div>
    <div>
      <meal-item v-for="m, idx in meals" :key="idx" :meal="m"/>
    </div> -->
  </div>
</template>

<script>
import BtnAddNew from './components/BtnAddNew.vue'
import CategoryItem from './components/CategoryItem.vue'
import IngredientItem from './components/IngredientItem.vue'
import MealItem from './components/MealItem.vue'
import MenuItem from './components/MenuItem.vue'
export default {
  components: { CategoryItem, BtnAddNew, IngredientItem, MealItem, MenuItem },
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
    fetch('http://localhost:8741/api/meals').then((response) => {
      this.meals = response.json().then(json => {
        this.meals = json['hydra:member']
      })
    })
  },
  data () {
    return {
      categories: [],
      ingredients: [],
      meals: []
    }
  }
}
</script>

<style>
body {
  margin: 1rem;
}
/* Stylisation scrollbar : Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 5px;
}
*::-webkit-scrollbar-thumb {
  background-color: #FCE9E1;
  border-radius: 25px;
}

#app {
  font-family: 'Gilroy', 'Roboto', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #000000;
  display: flex;
}
.sidebar-menu {
  background-color: #FCE9E1;
  border-radius: 10px;
  width: 25%;
  height: 92vh;
  padding: 1rem;
}
.logo {
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 6rem;
}
h1 {
  font-family: 'Lobster Two';
  font-size: 36px;
  color: #F38E69;
  margin: 0;
}
.main {
  width: 75%;
  padding: 2rem;
  height: 90vh;
  overflow: scroll;
}
</style>
