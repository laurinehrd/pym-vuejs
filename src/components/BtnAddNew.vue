<template>
  <button>
      <img src="../assets/pym-iconMore.png" alt="more">
      Ajouter {{ message }}
  </button>
</template>

<script>
export default {
  name: 'BtnAddNew',
  data () {
    return {
      message: 'une nouvelle catégorie'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  button {
      color: #F38E69;
      background-color: transparent;
      border: 2px solid #F38E69;
      border-radius: 10px;
      font-weight: bold;
      font-size: 18px;
      padding: 1rem;
      display: flex;
      align-items: center;
      font-family: 'Gilroy';
      cursor: pointer;
  }
  button:hover {
      background-color: #F38E69;
      color: white;
  }
  img {
      margin-right: 0.5rem;
  }

</style>
