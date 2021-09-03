<template>
  <div class="ingredient-item">
      <div>
        <p class="name">{{ ingredient.name }}</p>
        <p class="category">{{ ingredient.category.name }}</p>
      </div>
      <div class="icon-action">
          <img
            src="../assets/pym-iconUpdate.png" 
            alt="update">
          <img
            src="../assets/pym-iconDelete.png" 
            alt="delete">
      </div>
  </div>
</template>

<script>
export default {
  name: 'IngredientItem',
  props: {
    ingredient: Object
  }
}
</script>

<style scoped>
  .ingredient-item {
    background-color: #FCE9E1;
    padding: 1rem;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    margin: 1rem 0;
  }
  p {
    font-size: 18px;
  }
  .name {
    text-transform: capitalize;
    margin-bottom: 0.5em;
  }
  .category {
    color: #F38E69;
    font-size: 16px;
    margin-top: 0;
    text-transform: lowercase;
  }
  .icon-action {
    display: flex;
    align-items: center;
  }
  img {
    padding: 0 0.5rem;
    cursor: pointer;
  }
</style>
