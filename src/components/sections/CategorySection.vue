<template>
    <div>
        <btn-add-new btn="une nouvelle catégorie" @click="goAdd()"/>
        <category-item v-for="c, idx in categories" :key="idx" :category="c"/>
    </div>
</template>

<script>
import CategoryItem from '../items/CategoryItem.vue'
import BtnAddNew from '../BtnAddNew.vue'

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
  },
  methods: {
    goAdd () {
      this.$router.push('/newcategory')
    }
  }
}
</script>
