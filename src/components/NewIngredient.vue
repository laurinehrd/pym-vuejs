<template>
  <div>
      <h2>Ajouter un nouvel ingrédient</h2>
      <p>Nom de l'ingrédient</p>
      <input type="text">
      <p>Catégorie de l'ingrédient</p>
      <select name="category" id="category">
          <option v-for="c, idx in categories" :key="idx" :category="c" value="">{{ categories['name'] }}</option>
      </select>
      <div class="btn">
        <button class="cancel" @click="goBack()">Annuler</button>
        <button class="add">Ajouter</button>
        </div>
  </div>
</template>

<script>
export default {
  name: 'newIngredient',
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
    goBack () {
      this.$router.push('/ingredients')
    }
  }
}
</script>

<style scoped>
  p {
    text-transform: uppercase;
  }
  h2 {
    margin-bottom: 3rem;
    font-weight: lighter;
    font-size: 28px;
  }
  input, select {
    background-color: #FCE9E1;
    border: none;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    font-family: 'Gilroy';
    font-size: 16px;
    width: 50%;
    margin-bottom: 2rem;
  }
  select {
    width: 20%;
  }
  .btn {
    text-align: center;
    margin-top: 2rem;
  }
  .btn button.add {
    background-color: #F38E69;
    color: white;
    text-transform: uppercase;
    font-weight: bold;
    font-family: 'Gilroy';
    border: none;
    border-radius: 5px;
    padding: 0.5rem 3rem;
    cursor: pointer;
  }
  .btn button.cancel {
    background-color: white;
    color: black;
    text-transform: uppercase;
    font-weight: bold;
    font-family: 'Gilroy';
    border: 1px solid transparent;
    border-radius: 5px;
    padding: 0.5rem 3rem;
    cursor: pointer;
  }
  .btn button.cancel:hover {
    border: 1px solid black;
  }
</style>
