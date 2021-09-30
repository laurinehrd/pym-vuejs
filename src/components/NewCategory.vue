<template>
  <div>
      <h2>Ajouter une nouvelle catégorie</h2>
      <p>Nom de la catégorie</p>
      <input type="text">
      <div class="btn">
        <button class="cancel" @click="goBack()">Annuler</button>
        <button class="add">Ajouter</button>
      </div>
  </div>
</template>

<script>
export default {
  methods: {
    goBack () {
    //   this.$router.push('/categories')
      this.$router.go(-1)
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
  input {
    background-color: #FCE9E1;
    border: none;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    font-family: 'Gilroy';
    font-size: 16px;
    width: 50%;
    margin-bottom: 2rem;
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
    transition: ease-in-out all 0.2s;
  }
</style>
