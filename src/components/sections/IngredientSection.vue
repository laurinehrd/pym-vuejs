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
    // addNewIng: function () {
    //   const newIng = {
    //     ingredients: 'test',
    //     category_id: 2
    //   }
    //   fetch('http://localhost:8741/api/ingredients', {
    //     method: 'POST',
    //     body: JSON.stringify(newIng),
    //     headers: {
    //       'Content-type': 'application/json; charset=UTF-8'
    //     }
    //   })
    //     .then(response => response.json())
    //     .then(json => {
    //       console.log(json)
    //     })
    // },
    goAdd () {
      this.$router.push('/newingredient')
    }
  }
}
</script>
