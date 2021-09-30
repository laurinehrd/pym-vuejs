<template>
  <div id="app">
    <div class="sidebar-menu">
      <div class="logo">
        <h1>Pym</h1>
      </div>
      <router-link to="/"><menu-item menu="Plats" nameIcon="meal"/></router-link>
      <router-link to="/ingredients"><menu-item menu="Ingrédients" nameIcon="ingredient"/></router-link>
      <router-link to="/categories"><menu-item menu="Catégories" nameIcon="category"/></router-link>
    </div>
    <div class="main">
      <router-view/>
    </div>
  </div>
</template>

<script>
import BtnAddNew from './components/BtnAddNew.vue'
import CategoryItem from './components/CategoryItem.vue'
import CategorySection from './components/CategorySection.vue'
import IngredientItem from './components/IngredientItem.vue'
import MealItem from './components/MealItem.vue'
import MenuItem from './components/MenuItem.vue'
import NewIngredient from './components/NewIngredient.vue'
export default {
  components: { CategoryItem, BtnAddNew, IngredientItem, MealItem, MenuItem, CategorySection, NewIngredient },
  name: 'App'
}
</script>

<style>
body {
  margin: 1rem;
}
a {
  text-decoration: none;
  color: inherit;
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
