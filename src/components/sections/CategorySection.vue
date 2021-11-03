<template>
    <div>
        <btn-add-new btn="une nouvelle catégorie" @click="goAdd()"/>
        <div class="list-categories">
          <category-item class="item-cat" v-for="c, idx in categories" :key="idx" :category="c"/>
        </div>
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

<style scoped>
.list-categories {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.item-cat {
  width: 46%;
  padding: 0 1rem;
}
</style>
