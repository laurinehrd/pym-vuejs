<template>
  <div class="category-item">
      <p>{{ category.name }}</p>
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
  name: 'CategoryItem',
  props: {
    category: Object
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
