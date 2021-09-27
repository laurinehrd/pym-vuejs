<template>
    <div>
        <btn-add-new btn="un nouveau plat"/>
        <meal-item v-for="m, idx in meals" :key="idx" :meal="m"/>
    </div>
</template>

<script>
import MealItem from '../components/MealItem.vue'
import BtnAddNew from '../components/BtnAddNew.vue'

export default {
  components: {
    MealItem,
    BtnAddNew
  },
  async mounted () {
    fetch('http://localhost:8741/api/meals').then((response) => {
      this.meals = response.json().then(json => {
        this.meals = json['hydra:member']
      })
    })
  },
  data () {
    return {
      meals: []
    }
  }
}
</script>
