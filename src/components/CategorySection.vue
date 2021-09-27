<template>
    <div>
        <btn-add-new btn="une nouvelle catégorie"/>
        <category-item v-for="c, idx in categories" :key="idx" :category="c"/>
    </div>
</template>

<script>
import CategoryItem from '../components/CategoryItem.vue'
import BtnAddNew from '../components/BtnAddNew.vue'

export default {
  components: {
    CategoryItem,
    BtnAddNew
  },
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
