<template>
<div>
  <div class="category-item" v-if="edit == false">
      <p>{{ category.name }}</p>
      <div class="icon-action">
        <svg @click="iconUpdateCategory()" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M18.419 4.914a2 2 0 0 1 2.828 0l1.839 1.838a2 2 0 0 1 0 2.829L9.919 22.747a2 2 0 0 1-1.414.586H4.667v-3.838a2 2 0 0 1 .585-1.414L18.42 4.914Z" stroke="#3F4DA6"/><path d="M16.333 7 21 11.667" stroke="#3F4DA6"/></svg>
        <svg @click="deleteCategory()" width="27" height="27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.25 16.875V13.5M15.75 16.875V13.5M3.375 7.875h20.25v0c-1.286 0-1.928 0-2.403.285a2 2 0 0 0-.688.687c-.284.475-.284 1.117-.284 2.403v7.25c0 1.886 0 2.828-.586 3.414-.586.586-1.528.586-3.414.586h-5.5c-1.886 0-2.828 0-3.414-.586-.586-.586-.586-1.528-.586-3.414v-7.25c0-1.286 0-1.928-.285-2.403a2 2 0 0 0-.687-.687c-.475-.285-1.117-.285-2.403-.285v0ZM11.327 3.792c.128-.12.41-.225.803-.3a7.514 7.514 0 0 1 1.37-.117c.495 0 .977.04 1.37.116.393.076.675.181.803.3" stroke="#F25C69" stroke-width="2" stroke-linecap="round"/></svg>
      </div>
  </div>
  <div class="category-item" v-if="edit == true">
    <input type="text" :placeholder="`${category.name}`" v-model="newname"/>
      <div class="icon-action">
        <svg @click="putCategory()" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m4.3335 14.0835 5.4167 5.4167L21.6668 7.5835" stroke="#50BBF2" stroke-linecap="round"/></svg>
        <svg @click="cancelUpdate()" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke="#4F4F4F" stroke-linecap="round"><path d="M20.5995 20.5995 7.4001 7.4002M20.5999 7.4002 7.4005 20.5994"/></g></svg>
      </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
import VueSimpleAlert from 'vue-simple-alert'

Vue.use(VueSimpleAlert)

export default {
  name: 'CategoryItem',
  components: { VueSimpleAlert },
  props: {
    category: Object
  },
  data () {
    return {
      edit: false,
      newname: ''
    }
  },
  methods: {
    iconUpdateCategory () {
      this.edit = true
    },
    cancelUpdate () {
      this.edit = false
    },
    putCategory () {
      axios.put('http://localhost:8741/api/categories/' + this.category.id, {
        name: this.newname
      })
        .then((response) => {
          console.log(response.data)
          this.edit = false
          this.$fire({
            title: 'Confirmation',
            text: `La catégorie "${this.category.name}" a bien été modifié en "${this.newname}" !`,
            type: 'success',
            timer: 3000
          })
          this.$emit('onupdate', response.data)
        })
    },
    deleteCategory () {
      this.$confirm(
        'La catégorie sera supprimé définitivement',
        `Êtes-vous sûr de vouloir supprimer la catégorie <span>${this.category.name}</span> ?`,
        'warning'
      ).then(() => {
        axios.delete('http://localhost:8741/api/categories/' + this.category.id)
          .then((response) => {
            console.log(response.data)
            this.$fire({
              title: 'Confirmation',
              text: `La catégorie "${this.category.name}" a bien été supprimé !`,
              type: 'success',
              timer: 3000
            })
            this.$emit('ondelete')
          })
          .catch((_error) => {
            this.$fire({
              title: 'Erreur',
              text: `La catégorie "${this.category.name}" n'a pas pu être supprimé`,
              type: 'error',
              timer: 5000
            })
          })
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .category-item {
    background-color: #FCE9E1;
    padding: 1rem;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    margin: 1rem 0;
  }
  p {
    font-size: 18px;
    text-transform: capitalize;
  }
  .icon-action {
    display: flex;
    align-items: center;
  }
  svg {
    padding: 0 0.5rem;
    cursor: pointer;
  }
  input {
    background-color: transparent;
    border: none;
    border-bottom: 2px solid #F38E69;
    font-family: 'Gilroy';
    font-size: 18px;
    margin: 0.9em 0;
  }
</style>
