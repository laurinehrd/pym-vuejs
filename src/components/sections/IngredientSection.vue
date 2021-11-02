<template>
    <div>
        <btn-add-new btn="un nouvel ingrédient" @click="goAdd()"/>
        <ingredient-item v-for="i, idx in ingredients" :key="idx" :ingredient="i"/>
    </div>
</template>

<script>
import IngredientItem from '../items/IngredientItem.vue'
import BtnAddNew from '../BtnAddNew.vue'

export default {
  components: {
    IngredientItem,
    BtnAddNew
  },
  async mounted () {
    fetch('http://localhost:8741/api/ingredients').then((response) => {
      this.ingredients = response.json().then(json => {
        this.ingredients = json['hydra:member']
      })
    })
  },
  data () {
    return {
      ingredients: []
    }
  },
  methods: {
    goAdd () {
      this.$router.push('/newingredient')
    }
  }
}
</script>
